import os
from psycopg_pool import ConnectionPool
print("PRINTING THE OS>ENVIRON.GET in POOL", os.environ.get("DATABASE_URL", "postgresql://postgres:1475998467590045@srv-captain--shapeshifters-db"))


pool = ConnectionPool(
    conninfo=os.environ.get("DATABASE_URL", "postgresql://postgres:1475998467590045@srv-captain--shapeshifters-db"),
    kwargs={"autocommit": True},
    min_size=0,
    max_size=10,
    max_waiting=10,
    reconnect_timeout=30,
    max_lifetime=300,
    max_idle=60,
    check=ConnectionPool.check_connection,
)
