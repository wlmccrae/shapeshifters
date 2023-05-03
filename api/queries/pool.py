import os
from psycopg_pool import ConnectionPool
print("PRINTING THE OS>ENVIRON.GET in POOL", os.environ.get("DATABASE_URL", "test"))


pool = ConnectionPool(conninfo=os.environ.get("DATABASE_URL", "test"))
