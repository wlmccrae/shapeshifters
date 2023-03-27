### Login

* Endpoint path: /login
* Endpoint method: POST

* Request shape (JSON):

```json
    {
        username: str,
        password: str
    }
```

* Response: Account information and a token
* Response shape (JSON):

    ```json
    {
        "account": {
            username: str,
        },
        "token": str
    }
    ```

### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):

    ```json
    true
    ```

### Signup

* Endpoint path: /signup
* Endpoint method: POST

### Get a list of Events for Homepage

* Endpoint path: /api/events
* Endpoint method: GET
* Query parameters:
  * q: the location or activity provided

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):

```json
{
    first_name: str,
    last_name: str,
    email: str,
    zip_code: str,
    password: str,
    password_confirmation: str
}
```

* Response: A list of events near the user
* Response shape (JSON):

```json{
"message": str
}
```

### Get a list of Events the User is Hosting

* Endpoint path: api/events/hosting
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* query - fix

* Response: A list of events user is hosting
* Response shape:

```json
    {
        "events": [
        {
            "event_name": str,
            "event_type": str,
            "address": str,
            "apt": str,
            "city": str,
            "state": str,
            "country": str,
            "image_url": str,
            "date_time": datetime,
            "host": str,
            "host_contact": str,
            "event_description": text,
            "attendees": list
        }
    ]
}
```

### Get a list of Events User is Attending

* Endpoint path: api/events/attending
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

#query= fix

* Response: A list of events the user is attending
* Response shape:

```json
    {
        "events": [
        {
            "event_name": str,
            "event_type": str,
            "address": str,
            "apt": str,
            "city": str,
            "state": str,
            "country": str,
            "image_url": str,
            "date_time": datetime,
            "host": str,
            "host_contact": str,
            "event_description": text,
            "attendees": list
        }
    ]
}
```

### Get a Event Detail

* Endpoint path: api/events/{event_id}
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
event_id: int

* Response: A detail view of the event
* Response shape:

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host": str,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```

### Create an Event

* Endpoint path: api/events
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body (JSON):

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```

* Response: Details of event
* Response shape:

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host_id": int,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```

### Update Event

* Endpoint path: api/events/{event_id}
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body (JSON):

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host": str,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```

* Response: Details of event
* Response shape:

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host_id": int,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```

### Delete an Event

* Endpoint path: api/events/{event_id}
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body (JSON):
No body

* Response: Details of event
* Response shape

```json
    {
        "event_name": str,
        "event_type": str,
        "address": str,
        "apt": str,
        "city": str,
        "state": str,
        "country": str,
        "image_url": str,
        "date_time": datetime,
        "host_id": int,
        "host_contact": str,
        "event_description": text,
        "attendees": list
    }
```
