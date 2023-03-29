from pydantic import BaseModel
from datetime import datetime


class EventIn(BaseModel):
    event_name: str
    event_type: str
    address: str
    apt: str
    city: str
    state: str
    country: str
    image_url: str
    start_datetime: datetime
    end_datetime: datetime
    host: str
    host_contact: str
    event_description: str
    attendees: list


class EventOut(BaseModel):
    id: int
    host_id: str
    event_name: str
    event_type: str
    address_line1: str
    address_line2: str
    city: str
    state: str
    zip_code: str
    country: str
    image_url: str
    start_datetime: datetime
    end_datetime: datetime
    event_description: str
    attendees: list