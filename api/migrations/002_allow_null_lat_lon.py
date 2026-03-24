steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE events
            ALTER COLUMN lat DROP NOT NULL,
            ALTER COLUMN lon DROP NOT NULL;
        """,
        # "Down" SQL statement
        """
        ALTER TABLE events
            ALTER COLUMN lat SET NOT NULL,
            ALTER COLUMN lon SET NOT NULL;
        """,
    ],
]
