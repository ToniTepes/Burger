USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (120) NOT NULL,
devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;

