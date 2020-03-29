CREATE TABLE shoes (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	brand TEXT,
	kind TEXT,
	image TEXT
);

-- seed data
INSERT INTO shoes (brand, kind) VALUES ('RM Williams', 'Boot');
INSERT INTO shoes (brand, kind) VALUES ('Asics', 'Runner');
