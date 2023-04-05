from pydantic import BaseModel
from queries.pool import pool
from models.attendees import AttendeeIn, AttendeeOut


class AttendeesQueries:
    def add_attendee(self, attendee: AttendeeIn):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO attendees (
                        event_id,
                        user_id
                    )
                    VALUES (%s, %s)
                    RETURNING id
                    """,
                    [
                        attendee.event_id,
                        attendee.user_id,
                    ],
                )
                row = db.fetchone()
                print("ROW*******", row)
                id = row[0]
                print("ID*************", id)

        if id is not None:
            attendee = self.get_attendee(id)
            print("ATTENDEE************", attendee)
            return attendee

    def get_attendees(self, event_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM attendees
                    JOIN users ON users.id = attendees.user_id
                    JOIN events ON events.id = attendees.event_id
                    WHERE events.id = %s
                    """,
                    [event_id],
                )
                attendees = []
                rows = db.fetchall()
                for row in rows:
                    for i, column in enumerate(db.description):
                        print("i in get_attendees:", i)
                        print("Column names in get_attendees:", column.name)
                        if column.name == "user_id":
                            attendees.append(row[i])
                print("get attendees rows", rows)


    def get_attendee(self, attendee_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT * FROM attendees
                    WHERE id = %s
                    """,
                    [attendee_id],
                )
                row = db.fetchone()
                print("ROW IN GET_ATTENDEE METHOD", row)
                attendee_dict = self.attendee_record_to_dict(row, db.description)
                print("ATTENDEE_DICT", attendee_dict)
                return attendee_dict


    def delete_attendee(self, attendee_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM attendees
                    WHERE id = %s
                    """,
                    [attendee_id],
                )

    def attendee_record_to_dict(self, row, description):
        attendee = None
        if row is not None:
            attendee = {}
            attendee_fields = ["id", "event_id", "user_id"]
            # Can add dictionaries with host and event if we need information for stretch goals
            # host = {}
            # host_fields = ["id", "first_name", "last_name"]

            # event = {}
            # event_fields = ["id", "event_name"]

            for i, column in enumerate(description):
                if column.name in attendee_fields:
                    attendee[column.name] = row[i]

            return attendee
