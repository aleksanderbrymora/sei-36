CREATE TABLE fighters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    franchise TEXT,
    in_game TEXT,
    stock_image TEXT,
    image TEXT -- URL for a photo
);

-- seed data
INSERT INTO fighters (name, franchise, in_game) VALUES ("Wolf", "Star Fox", "Brawl | Ultimate");
INSERT INTO fighters (name, franchise, in_game) VALUES ("Cloud", "Final Fantasy VII", "Smash4 | Ultimate");