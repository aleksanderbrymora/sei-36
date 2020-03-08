CREATE TABLE cars (
  id INTEGER PRIMARY KEY,
  brand TEXT,
  model TEXT,
  style TEXT,
  image TEXT
);

--seed data

INSERT INTO cars(id,brand,model,style) VALUES (1,"Audi","A4","sedan");
INSERT INTO cars(id,brand,model,style) VALUES (2,"Mercedes","Cclass","wagon");
INSERT INTO cars(id,brand,model,style) VALUES (3,"BMW","4series","coupe");
INSERT INTO cars(id,brand,model,style) VALUES (4,"RangeRover","Velar","sUV");
