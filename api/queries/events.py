from pydantic import BaseModel
from queries.pool import pool
from models.events import EventIn, EventOut
# from queries.attendees import get_attendees


class EventQueries:
    def create_event(self, event: EventIn):
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
                        image_url,
                        start_datetime,
                        end_datetime,
                        event_description
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
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
                        event.country,
                        event.zip_code,
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
                print("EVENTS*****************", events)
                return events

    def get_hosting_events(self, host_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM events
                    WHERE host_id = %s
                    """,
                    [host_id]
                )
                events = []
                rows = db.fetchall()
                for row in rows:
                    event = self.event_record_to_dict(row, db.description)
                    events.append(event)
                print("EVENTS*****************", events)
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
                    [user_id]
                )
                events = []
                rows = db.fetchall()
                for row in rows:
                    event = self.event_record_to_dict(row, db.description)
                    events.append(event)
                print("EVENTS*****************", events)
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
                # attendees = self.get_attendees(2)
                # print("ATTENDEES:", attendees)
                # print("********************************")
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
                params =[
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
                    , image_url
                    , start_datetime
                    , end_datetime
                    , event_description
                    """,
                    params,
                )

                record = None
                row = db.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(db.description):
                        record[column.name] = row[i]

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
                "zip_code",
                "image_url",
                "start_datetime",
                "end_datetime",
                "event_description"
                # "attendees",
            ]
            for i, column in enumerate(description):
                # print(column.name)
                # print(i)
                if column.name in event_fields:
                    event[column.name] = row[i]

            host = {}
            host_fields = ["id", "first_name", "last_name"]

            for i, column in enumerate(description):
                if column.name in host_fields:
                    host[column.name] = row[i]

            event["host"] = host
            # event["attendees"] = []

        return event

    # # TODO: TEST THIS ONCE WE HAVE ATTENDEES
    # def get_attendees(self, event_id):
    #     with pool.connection() as conn:
    #         with conn.cursor() as db:
    #             db.execute(
    #                 """
    #                 SELECT * FROM attendees
    #                 JOIN users ON users.id = attendees.user_id
    #                 JOIN events ON events.id = attendees.event_id
    #                 WHERE events.id = %s
    #                 """,
    #                 [event_id],
    #             )
    #             attendees = []
    #             rows = db.fetchall()
    #             for row in rows:
    #                 for i, column in enumerate(db.description):
    #                     print("i in get_attendees:", i)
    #                     print("Column names in get_attendees:", column.name)
    #                     if column.name == "user_id":
    #                         attendees.append(row[i])
    #     print("get attendees rows", rows)
