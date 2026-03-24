from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class EventIn(BaseModel):
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


class EventOut(BaseModel):
    id: int
    host_id: int
    event_name: str
    event_type: str
    address_line1: str
    address_line2: str
    city: str
    state: str
    zip_code: str
    country: str
    lat: Optional[float]
    lon: Optional[float]
    image_url: str
    start_datetime: datetime
    end_datetime: datetime
    event_description: str
    host: dict


class EventsOut(BaseModel):
    events: list[EventOut]
