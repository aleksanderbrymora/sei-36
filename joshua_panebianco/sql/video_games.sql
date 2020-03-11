CREATE TABLE video_games (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	console TEXT,
	cover TEXT
);

INSERT INTO video_games (title, console) VALUES ('Mario Kart Double Dash', 'GameCube');
INSERT INTO video_games (title, console) VALUES ('Tony Hawk Pro Skater', 'PS2');
