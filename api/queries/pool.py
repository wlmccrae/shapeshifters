import os
from psycopg_pool import ConnectionPool
print("PRINTING THE OS>ENVIRON.GET in POOL", os.environ.get("DATABASE_URL", "postgresql://postgres:1475998467590045@srv-captain--shapeshifters-db"))


pool = ConnectionPool(conninfo=os.environ.get("DATABASE_URL", "postgresql://postgres:1475998467590045@srv-captain--shapeshifters-db"))
