from fastapi import APIRouter, Depends
from models.attendees import AttendeeIn, AttendeeOut
from queries.attendees import AttendeesQueries
from authenticator import authenticator


router = APIRouter()


@router.post("/api/events/{event_id}/attendees", response_model=AttendeeOut)
async def add_attendee(
    event_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: AttendeesQueries = Depends(),
):
    return queries.add_attendee(AttendeeIn(user_id=account_data['id'], event_id=event_id))


@router.delete("/api/events/{event_id}/attendees/{attendees_id}", response_model=bool)
def delete_attendee(
    attendee_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: AttendeesQueries = Depends()
):
    queries.delete_attendee(attendee_id)
    return True
