from fastapi import Depends, APIRouter

from models.events import EventIn, EventOut
from queries.events import EventQueries

router = APIRouter()

# @router.get("/api/events", response_model=EventOut)
# def get_events(queries: EventQueries = Depends()):
#     return {"events": queries.get_events()}

@router.post("/api/events", response_model=EventOut)
def create_event(
    event: EventIn,
    queries: EventQueries = Depends(),
    ):
    return queries.create_event(event)
