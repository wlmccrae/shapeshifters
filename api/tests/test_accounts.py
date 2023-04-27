from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries
from authenticator import authenticator

client = TestClient(app)
def fake_get_current_account_data():
    return {
        "id": 5
    }

class FakeAccountQueries:
    def get_account(self):
        return {
            "id": 5,
            "first_name": "Brandy",
            "last_name": "Soto",
            "zip_code": "78704",
            "email": "brandy.soto@email.com",
            "hashed_password": "number1"
        }

# Victoria's Test
def test_get_account():
    # Arrange
    app.dependency_overrides[AccountQueries] = FakeAccountQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    # Act
    res = client.get('/api/account/5')

    # Assert
    assert res.status_code == 200

    # A Cleanup
    app.dependency_overrides = {}