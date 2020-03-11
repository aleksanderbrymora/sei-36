CREATE TABLE shops (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  shop_name   TEXT,
  flower_name TEXT,
  website     TEXT
);

-- seed data
INSERT INTO shops(shop_name,flower_name,website) VALUES ('FLowers_Accross_Sydney','Aconite','https://www.flowersacrosssydney.com.au/');
INSERT INTO shops(shop_name,flower_name,website) VALUES
('Bloomex','Ageratum','https://bloomex.com.au/');
