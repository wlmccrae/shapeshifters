from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator

from routers import accounts, events, attendees


app = FastAPI()
app.include_router(authenticator.router, tags=["AUTH"])
app.include_router(accounts.router, tags=["ACCOUNTS"])
app.include_router(events.router, tags=["EVENTS"])
app.include_router(attendees.router, tags=["ATTENDEES"])


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
