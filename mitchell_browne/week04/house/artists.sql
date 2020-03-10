CREATE TABLE artists(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  location TEXT,
  top_track TEXT,
  label TEXT,
  image TEXT
);

-- seed data
INSERT INTO artists (name, genre, location, top_track, label, image) VALUES ('Walker & Royce', 'Tech House', 'New York City', 'My Own Thang', 'DIRTYBIRD', 'https://www.residentadvisor.net/images/profiles/walkerroyce.jpg');
INSERT INTO artists (name, genre, location, top_track, label, image) VALUES ('Eli Brown', 'House', 'London', 'Hysteria', 'Toolroom', 'https://toolroomrecords.com/wp-content/uploads/2019/06/TLRMWEB-ARTISTS-f-1024x1024.jpg');
