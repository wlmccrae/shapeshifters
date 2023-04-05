from pydantic import BaseModel


class AttendeeIn(BaseModel):
    event_id: int
    user_id: int


class AttendeeOut(BaseModel):
    id: int
    event_id: int
    user_id: int
