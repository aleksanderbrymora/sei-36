
CREATE TABLE chinchillas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    owner TEXT,
    year_born INTEGER, 
    image TEXT -- URL for a photo
);

--seed data

INSERT INTO chinchillas (name, owner, year_born) VALUES ("Happy", "Matt Damon", 2000, );
INSERT INTO chinchillas (name, owner, year_born) VALUES ("Funny", "George Clooney", 2005, );
INSERT INTO chinchillas (name, owner, year_born) VALUES ("Cheeky", "Nicholas Cage", 2010, "https://petcentral.chewy.com/wp-content/uploads/chinchilla_Icealien-1.jpg");
INSERT INTO chinchillas (name, owner, year_born) VALUES ("Fatso", "Brad Pitt", 1999, "https://i.pinimg.com/originals/65/67/85/656785d72773e48d3dbefb19e5e2f8a6.jpg");





