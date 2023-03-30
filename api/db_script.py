from pydantic import BaseModel
from queries.pool import pool
from queries.accounts import AccountQueries
from queries.events import EventQueries
from models.accounts import AccountIn
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
        email=user["email"],
        hashed_password=user["hashed_password"]
        )
    hashed_password = authenticator.hash_password(user_account.hashed_password)
    account = AccountQueries()
    # Ask instructor for best practices using try/except.
    try:
        user_in = account.create(account=user_account, hashed_password=hashed_password)
        print("**************************USER_IN", user_in)
    except:
        print(f"*******Error*******This user is not unique.")

