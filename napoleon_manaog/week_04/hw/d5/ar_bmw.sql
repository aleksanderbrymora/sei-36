-- SQL: Structured Query Language
CREATE TABLE families (
  id INTEGER PRIMARY KEY,
  name TEXT
);

-- seed data
-- Family (SERIES)
INSERT INTO families(name) VALUES ('E46');
INSERT INTO families(name) VALUES ('E90');


CREATE TABLE bmws (
  id INTEGER PRIMARY KEY,
  family_id INTEGER,
  model TEXT,
  year TEXT,
  image TEXT --,
  -- FOREIGN KEY(series_id) REFERENCES series(series_id) -- DB level makes it quicker coz of indexing inherent in DB engine used

);

-- seed data
-- BMWS
INSERT INTO bmws (family_id, model, year) VALUES (1,'320i','2000');
INSERT INTO bmws (family_id, model, year) VALUES (2,'330i','2018');

-- 330i
-- https://www.youtube.com/watch?v=ANVrXxa34Ik
-- https://carsales.pxcrush.net/carsales/cars/private/8h8dpn6xnx964t9cicafsktfy.jpg


-- https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/bmw-330i-2015-%282%29.jpg

-- https://www.carsguide.com.au/car-reviews/2016-bmw-330i-m-sport-sedan-road-test-40368

--

-- https://s1.cdn.autoevolution.com/images/gallery/BMW-3-Series--E46--3622_16.jpg ***

-- https://s1.cdn.autoevolution.com/images/gallery/BMW-3-Series--E46--3622_15.jpg

-- M3

-- https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/03/13/-1/bmw-m3-csl-(2).jpg
-- https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/03/13/-1/bmw-m3-csl-rear.jpg
