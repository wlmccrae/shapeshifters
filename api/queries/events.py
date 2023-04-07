from pydantic import BaseModel
from queries.pool import pool
from models.events import EventIn, EventOut
import requests
from keys import RADAR_API_KEY
import json

# from queries.attendees import get_attendees


class EventQueries:
    def create_event(self, event: EventIn):
        address = event.address_line1
        print("address", address)
        city = event.city
        state = event.state

        url = f'https://api.radar.io/v1/geocode/forward?query="{address}",{city},{state}'
        headers = {"Authorization": RADAR_API_KEY}

        resp = requests.get(url, headers=headers)
        content = json.loads(resp.content)

        try:
            lat = content["addresses"][0]["latitude"]
            lon = content["addresses"][0]["longitude"]

        except Exception:
            print("try failed")
            return None

        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO events (
                        host_id,
                        event_name,
                        event_type,
                        address_line1,
                        address_line2,
                        city,
                        state,
                        zip_code,
                        country,
                        lat,
                        lon,
                        image_url,
                        start_datetime,
                        end_datetime,
                        event_description
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        event.host_id,
                        event.event_name,
                        event.event_type,
                        event.address_line1,
                        event.address_line2,
                        event.city,
                        event.state,
                        event.zip_code,
                        event.country,
                        lat,
                        lon,
                        event.image_url,
                        event.start_datetime,
                        event.end_datetime,
                        event.event_description,
                    ],
                )
                row = db.fetchone()
                id = row[0]
        if id is not None:
            return self.get_event(id)

    def get_events(self):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM events
                    """
                )
                events = []
                rows = db.fetchall()
                for row in rows:
                    event = self.event_record_to_dict(row, db.description)
                    events.append(event)
                return events

    def get_hosting_events(self, host_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM events
                    WHERE host_id = %s
                    """,
                    [host_id],
                )
                events = []
                rows = db.fetchall()
                for row in rows:
                    event = self.event_record_to_dict(row, db.description)
                    events.append(event)
                return events

    def get_attending_events(self, user_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM events
                    JOIN attendees ON events.id = attendees.event_id
                    WHERE attendees.user_id = %s
                    """,
                    [user_id],
                )
                events = []
                rows = db.fetchall()
                for row in rows:
                    event = self.event_record_to_dict(row, db.description)
                    events.append(event)
                return events

    def get_event(self, event_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM events
                    WHERE id = %s
                    """,
                    [event_id],
                )
                row = db.fetchone()
                return self.event_record_to_dict(row, db.description)

    def delete_event(self, event_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM events
                    WHERE id = %s
                    """,
                    [event_id],
                )

    # Would like to make it so the request body doesn't need all fields
    def update_event(self, event_id, event_data):
        with pool.connection() as conn:
            with conn.cursor() as db:
                params = [
                    event_data.event_name,
                    event_data.host_id,
                    event_data.event_type,
                    event_data.address_line1,
                    event_data.address_line2,
                    event_data.city,
                    event_data.state,
                    event_data.zip_code,
                    event_data.country,
                    event_data.image_url,
                    event_data.start_datetime,
                    event_data.end_datetime,
                    event_data.event_description,
                    event_id,
                ]
                print("PARAMS", params)
                db.execute(
                    """
                    UPDATE events
                    SET event_name = %s
                    , host_id = %s
                    , event_type = %s
                    , address_line1 = %s
                    , address_line2 = %s
                    , city = %s
                    , state = %s
                    , zip_code = %s
                    , country = %s
                    , image_url = %s
                    , start_datetime = %s
                    , end_datetime = %s
                    , event_description = %s
                    WHERE id = %s
                    RETURNING id
                    , event_name
                    , host_id
                    , event_type
                    , address_line1
                    , address_line2
                    , city
                    , state
                    , zip_code
                    , country
                    , lat
                    , lon
                    , image_url
                    , start_datetime
                    , end_datetime
                    , event_description
                    """,
                    params,
                )

                record = None
                row = db.fetchone()
                print("****** ROW *******", row)
                if row is not None:
                    record = {}
                    for i, column in enumerate(db.description):
                        record[column.name] = row[i]

                print("****** RECORD *******", record)
                return record

    def event_record_to_dict(self, row, description):
        event = None
        if row is not None:
            event = {}
            event_fields = [
                "id",
                "host_id",
                "event_name",
                "event_type",
                "address_line1",
                "address_line2",
                "city",
                "state",
                "country",
                "lat",
                "lon",
                "zip_code",
                "image_url",
                "start_datetime",
                "end_datetime",
                "event_description",
            ]
            for i, column in enumerate(description):
                if column.name in event_fields:
                    event[column.name] = row[i]

            host = {}
            host_fields = ["id", "first_name", "last_name"]

            for i, column in enumerate(description):
                if column.name in host_fields:
                    host[column.name] = row[i]

            event["host"] = host

        return event
