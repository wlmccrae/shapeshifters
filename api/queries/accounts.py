from pydantic import BaseModel
from queries.pool import pool
from models.accounts import AccountIn, AccountOut, AccountOutWithPassword


class AccountQueries:
    def create(self, account: AccountIn, hashed_password: str):
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                INSERT INTO users
                    (first_name, last_name, email, hashed_password)
                VALUES
                    (%s, %s, %s, %s)
                RETURNING id;
                """,
                    [account.first_name, account.last_name, account.email, hashed_password],
                )
                id = result.fetchone()[0]
                old_data = account.dict()
                return AccountOutWithPassword(id=id, **old_data)

    def get(self, email):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, first_name, last_name, email, hashed_password
                    FROM users
                    WHERE email = %s
                    """,
                    [email],
                )

                record = None
                row = db.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(db.description):
                        record[column.name] = row[i]

                return AccountOutWithPassword(**record)
