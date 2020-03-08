CREATE TABLE posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    date TEXT,
    title TEXT,
    post BLOB
);

-- INSERT INTO 