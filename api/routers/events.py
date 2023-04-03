from fastapi import Depends, APIRouter, Response

from models.events import EventIn, EventOut, EventsOut
from queries.events import EventQueries

router = APIRouter()


@router.post("/api/events", response_model=EventOut)
def create_event(
    event: EventIn,
    queries: EventQueries = Depends(),
    ):
    return queries.create_event(event)


@router.get("/api/events", response_model=EventsOut)
def get_events(
    queries: EventQueries = Depends(),
    ):
    return {"events": queries.get_events()}


@router.get("/api/events/{event_id}", response_model=EventOut)
def get_event(
    event_id: int,
    response: Response,
    queries: EventQueries = Depends(),
):
    record = queries.get_event(event_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.put("/api/events/{event_id}", response_model=EventOut)
def update_event(
    event_id: int,
    event_in: EventIn,
    response: Response,
    queries:EventQueries = Depends()
):
    record = queries.update_event(event_id, event_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/events/{event_id}", response_model=bool)
def delete_event(
    event_id: int,
    queries: EventQueries = Depends()
):
    queries.delete_event(event_id)
    return True
