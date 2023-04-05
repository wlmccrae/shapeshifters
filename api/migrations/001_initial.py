steps = [
    ############## USERS ##############
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            zip_code VARCHAR(10) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(100) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ],
    ############## EVENTS ##############
    [
        # "Up" SQL statement
        """
        CREATE TABLE events (
            id SERIAL PRIMARY KEY NOT NULL,
            host_id INT NOT NULL, FOREIGN KEY(host_id) REFERENCES users(id),
            event_name VARCHAR(250) NOT NULL,
            event_type VARCHAR(100) NOT NULL,
            image_url VARCHAR(500),
            start_datetime TIMESTAMP NOT NULL,
            end_datetime TIMESTAMP NOT NULL,
            address_line1 VARCHAR(250) NOT NULL,
            address_line2 VARCHAR(250),
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            zip_code VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            event_description TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE events;
        """,
    ],
    ############## ATTENDEES ##############
    [
        # "Up" SQL statement
        """
        CREATE TABLE attendees (
            id SERIAL PRIMARY KEY NOT NULL,
            user_id INT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id),
            event_id INT NOT NULL, FOREIGN KEY(event_id) REFERENCES events(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE attendees;
        """,
    ],
]
