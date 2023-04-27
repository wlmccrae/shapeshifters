from fastapi.testclient import TestClient
from main import app
from queries.events import EventQueries
from authenticator import authenticator



client = TestClient(app)
def fake_get_current_account_data():
    return {
        'id': 4
    }

class FakeEventQueries:
    def get_events(self):
        return [
              {
                "id": 21,
                "host_id": 1,
                "event_name": "Yoga at the Park",
                "event_type": "yoga",
                "address_line1": "109 Jacob Fontaine Ln",
                "address_line2": "",
                "city": "Austin",
                "state": "TX",
                "zip_code": "78752",
                "country": "US",
                "lat": 30.325148,
                "lon": -97.715217,
                "image_url": "https://s3.us-east-2.amazonaws.com/media.myelisting.com/listings/3/160120/jacob-fontaine-ln-3.jpg?tr=w-300",
                "start_datetime": "2023-06-17T10:00:00",
                "end_datetime": "2023-06-17T11:00:00",
                "event_description": "Free yoga class at Jacob Fontaine Plaza Park.",
                "host": {
                    "first_name": "Carmen",
                    "last_name": "Wheeler",
                    "host_id": 1
                }
            },
        ]
    def get_attending_events(self, attendee_id):
        return [
            {
                "id": 21,
                "host_id": 1,
                "event_name": "Yoga at the Park",
                "event_type": "yoga",
                "address_line1": "109 Jacob Fontaine Ln",
                "address_line2": "",
                "city": "Austin",
                "state": "TX",
                "zip_code": "78752",
                "country": "US",
                "lat": 30.325148,
                "lon": -97.715217,
                "image_url": "https://s3.us-east-2.amazonaws.com/media.myelisting.com/listings/3/160120/jacob-fontaine-ln-3.jpg?tr=w-300",
                "start_datetime": "2023-06-17T10:00:00",
                "end_datetime": "2023-06-17T11:00:00",
                "event_description": "Free yoga class at Jacob Fontaine Plaza Park.",
                "host": {
                    "first_name": "Carmen",
                    "last_name": "Wheeler",
                    "host_id": 1
                },
                "attendees": [4]
            }
        ]
 # Emily's Test
def test_get_events():
    # Arrange
    app.dependency_overrides[EventQueries] = FakeEventQueries
    # Act
    res = client.get('/api/events')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data['events']) == 1

    # A Cleanup
    app.dependency_overrides = {}

# Attending Events Test by Kane Rodriguez
def test_get_attending_events():
    # Arrange
    app.dependency_overrides[EventQueries] = FakeEventQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    # Act
    res = client.get('/api/events/attending')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data['events']) == 1
    assert data['events'][0]['id'] == 21

    # A Cleanup
    app.dependency_overrides = {}
