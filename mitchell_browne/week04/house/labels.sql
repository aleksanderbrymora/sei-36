CREATE TABLE labels(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  established INTEGER,
  image TEXT
);

-- seed data
INSERT INTO labels (name, location, established, image) VALUES ('DIRTYBIRD', 'San Francisco', 2005, 'https://geo-media.beatport.com/image/bcd90633-a389-41ad-a628-d8978d016413.jpg');
INSERT INTO labels (name, location, established, image) VALUES ('Toolroom', 'London', 2003,'https://geo-media.beatport.com/image/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg');
INSERT INTO labels (name, location, established, image) VALUES ('Nervous Records', 'New York', 1991, 'https://geo-media.beatport.com/image/56af9a46-d12d-407c-93bc-ee15595197e1.jpg');
