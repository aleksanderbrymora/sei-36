CREATE TABLE crickets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  price TEXT,
  size TEXT,
  model TEXT,
  image TEXT -- URL of a photo of a butterfly
);


-- seed data
INSERT INTO crickets (brand,price,size,model,image) VALUES ('SS', '300','senior level','willowone','image');
INSERT INTO crickets (brand,price,size,model,image) VALUES ('SS', '150','senior level','willowtwo','image');

-- table name : cricket_stores class name : Cricketstore
