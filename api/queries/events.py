from pydantic import BaseModel
from queries.pool import pool
from models.events import EventIn, EventOut


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
                        event_description,
                        attendees
                    ),
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
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
                        event.image_url,
                        event.start_datetime,
                        event.end_datetime,
                        event.event_description,
                        event.attendees
                    ]
                )
    # def get_event(self):
    #     with pool.connection() as conn:
    #         with conn.cursor() as db:
    #             db.execute(
    #                 """
    #                 SELECT * FROM events
    #                 JOIN users ON users.id = events.host_id
    #                 ORDER BY events.start_datetime;
    #                 """
    #             )

    #             events = []
    #             rows = db.fetchall()
    #             # for row in rows:
    #             #     event = self.

    # def event_record_to_dict(self, row, description):
    #     event = None
    #     if row is not None:
    #         event = {}
    #         event_fields = [
    #             "id",
    #             "host_id",
    #             "event_name",
    #             "event_type",
    #             "address_line1",
    #             "address_line2",
    #             "city",
    #             "state",
    #             "zip_code",
    #             "image_url",
    #             "start_datetime",
    #             "end_datetime",
    #             "event_description",
    #             "attendees"
    #         ]
    #         for i, column in enumerate(description):
    #             if column.name in event_fields:
    #                 event[column.name] = row[i]

    #         host = {}
    #         host_fields = [

    #         ]
