import traceback
from pydantic import BaseModel
from queries.pool import pool
from queries.accounts import AccountQueries
from queries.events import EventQueries
from models.accounts import AccountIn
from models.events import EventIn
from database import users, events
from authenticator import authenticator

# create a few different users
# import AccountsQueries and use create method
# pick off the ids for those uses
# take those ids and plug them in when you're seeding the database for the events
# print("USERS:", users)
# print("EVENTS:", events)

for user in users:
    user_account = AccountIn(
        first_name=user["first_name"],
        last_name=user["last_name"],
        zip_code=user["zip_code"],
        email=user["email"],
        hashed_password=user["hashed_password"],
    )
    hashed_password = authenticator.hash_password(user_account.hashed_password)
    account = AccountQueries()
    # Ask instructor for best practices using try/except.
    try:
        user_in = account.create(account=user_account, hashed_password=hashed_password)
        print("**************************USER_IN", user_in)
    except:
        print(f"*******Error*******User not created")

for event in events:
    print(f"EVENT: {event}")
    # print(f"HOST ID: {event["host_id"]}")
    event_row = EventIn(
        event_name=event["event_name"],
        event_type=event["event_type"],
        address_line1=event["address_line1"],
        address_line2=event["address_line2"],
        city=event["city"],
        state=event["state"],
        zip_code=event["zip_code"],
        country=event["country"],
        image_url=event["image_url"],
        start_datetime=event["start_datetime"],
        end_datetime=event["end_datetime"],
        event_description=event["event_description"]
    )
    new_event = EventQueries()
    print(f"New Event: {event_row}")
    # Ask instructor for best practices using try/except.
    try:
        event_in = new_event.create_event(event=event_row, host_id=event["host_id"])
        print("**************************EVENT_IN", event_in)
    except Exception as e:
        print(f"*******Error*******Event not created")
        print(e)
