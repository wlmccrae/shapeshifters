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

    def get_event(self, event_id):
        return {
            "id": event_id,
            "host_id": 5,
            "event_name": "Lake Travis Kayak Tour",
            "event_type": "kayaking",
            "address_line1": "16107 FM2769",
            "address_line2": "",
            "city": "Leander",
            "state": "TX",
            "zip_code": "78641",
            "country": "US",
            "lat": 30.577534,
            "lon": -97.851725,
            "image_url": "",
            "start_datetime": "2023-06-02T10:00:00",
            "end_datetime": "2023-06-02T12:00:00",
            "event_description": "Join us for a scenic kayak tour on Lake Travis.",
            "host": {
                "first_name": "Yuri",
                "last_name": "Nator",
                "host_id": 5
            }
        }

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

    def get_hosting_events(self, host_id):
        return [
            {
                "id": 21,
                "host_id": 4,
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
                "start_datetime": "2023-06-30T10:00:00",
                "end_datetime": "2023-06-30T11:00:00",
                "event_description": "Free yoga class at Jacob Fontaine Plaza Park.",
                "host": {
                    "first_name": "Wanda",
                    "last_name": "McCrae",
                    "host_id": 4
                }
            },
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


# Test Author: Lotus
# Date Written: 25 April 2023
# Unit Being Tested: get_hosting_events route
# Test Success: Returned status code '200' and the passed in ID matches
#               the host IDs in the returned events.
#######
def test_get_hosting_events():
    # Arrange
    app.dependency_overrides[EventQueries] = FakeEventQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    # Act
    res = client.get('/api/events/hosting')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data['events']) == 1
    assert data['events'][0]['host_id'] == 4

    # A Cleanup
    app.dependency_overrides = {}


# Mike's Test
def test_get_event():
    # Arrange
    app.dependency_overrides[EventQueries] = FakeEventQueries

    # Act
    res = client.get("api/events/10")

    # Assert
    assert res.status_code == 200
