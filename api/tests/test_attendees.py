from fastapi.testclient import TestClient
from main import app
from queries.attendees import AttendeesQueries


client = TestClient(app)

class FakeAttendeesQueries:
    def get_attendees(self, event_id):
        return [
            {
                "id": 1,
                "event_id": event_id,
                "user_id": 1
            },
            {
                "id": 2,
                "event_id": event_id,
                "user_id": 2
            }
        ]

# Test Author: Victoria Pratt
def test_get_attendees():

    # Arrange
    app.dependency_overrides[AttendeesQueries] = FakeAttendeesQueries

    # Act
    res = client.get('/api/attendees?event_id=1')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data['attendees']) == 2

    # Cleanup
    app.dependency_overrides = {}