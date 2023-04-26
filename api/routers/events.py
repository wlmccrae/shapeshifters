from fastapi import Depends, APIRouter, Response
from models.events import EventIn, EventOut, EventsOut
from queries.events import EventQueries
from authenticator import authenticator
from datetime import datetime

import traceback


router = APIRouter()

def filter_past_events(events):
    today = datetime.now().date()
    return [event for event in events if event.end_date.date() >= today]


################################# POST #################################


@router.post("/api/events", response_model=EventOut)
def create_event(
    event: EventIn,
    queries: EventQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.create_event(event, account_data["id"])


################################# GET ALL EVENTS #################################


@router.get("/api/events", response_model=EventsOut)
def get_events(
    queries: EventQueries = Depends(),
):
    return {"events": queries.get_events()}


################################# FILTERING #################################


@router.get("/api/events/hosting", response_model=EventsOut)
def get_hosting_events(
    queries: EventQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    hosting_list = {"events": queries.get_hosting_events(account_data["id"])}

    return hosting_list


@router.get("/api/events/attending", response_model=EventsOut)
def get_attending_events(
    queries: EventQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"events": queries.get_attending_events(account_data["id"])}


################################# GET | PUT | DELETE #################################


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
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: EventQueries = Depends(),
):
    record = queries.update_event(event_id, event_in, account_data["id"])
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/events/{event_id}", response_model=bool)
def delete_event(
    event_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: EventQueries = Depends(),
):
    queries.delete_event(event_id)
    return True
