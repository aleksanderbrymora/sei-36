CREATE TABLE socks (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	kind TEXT,
	color TEXT
);

-- Seed data
INSERT INTO socks (kind, color) VALUES ('Business Socks', 'Black');
INSERT INTO socks (kind, color) VALUES ('Sports', 'White');
