-- Table for Flowers
CREATE TABLE flowers (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT,
  sun_needs   TEXT,
  soil_needs  TEXT,
  bloom_in    TEXT,
  image       TEXT
);

-- seed data
INSERT INTO flowers(name,sun_needs,soil_needs,bloom_in,image) VALUES ('Aconite', 'Partial Shade','Well-drained','Early Spring','/images/aconite.jpeg');
INSERT INTO flowers(name,sun_needs,soil_needs,bloom_in,image) VALUES ('Ageratum', 'Full Sun','Well-drained','Summer','/images/ageratum.jpeg');
