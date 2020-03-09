CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  artist TEXT,
  album TEXT,
  year INTEGER,
  image TEXT -- URL for album image
);

-- seed --
INSERT INTO albums (artist, album, year, image) VALUES ('Ottawan', 'D.I.S.C.O.', 1979,'https://flashbak.com/wp-content/uploads/2017/07/ottawan-disco.jpg');
INSERT INTO albums (artist, album, year, image) VALUES ('Harold Melvin & The Blue Notes', 'Black & Blue', 1973,'https://img.discogs.com/epdNl9jlZExYBwqdJ5RiI2JOKJc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-633418-1354895103-1619.jpeg.jpg');
INSERT INTO albums (artist, album, year, image) VALUES ('The Miracles', 'Do It Baby', 1974, 'https://img.discogs.com/CHqIuxhv7hC2zFJYzyqmnYb0NSM=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-331988-1208086751.jpeg.jpg');
