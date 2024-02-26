--DDL
CREATE TABLE students (
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age  NUMERIC
);

DROP TABLE students;

--DML
INSERT INTO students (name, age, cpf)
VALUES ("Enrique", 20, "234.123.345-54"),
("Karmen", 30, "234.323.645-54");

UPDATE students SET age = 25 WHERE id = 1;

DELETE FROM students WHERE id = 1;

DELETE FROM students WHERE id < 3 and id > 1;

-- DQL
SELECT * FROM students WHERE id = 5;

SELECT * FROM students WHERE id >= 6; 

SELECT * FROM students WHERE id >= 6 and id <=8 ORDER BY id DESC; 

SELECT * FROM students WHERE id >= 6 or id <= 8 ORDER BY age ASC; 

-- DDL

ALTER TABLE students 
ADD COLUMN city NOT NULL DEFAULT "Jucás";

ALTER TABLE students 
DROP COLUMN city;

ALTER TABLE students 
DROP COLUMN cpf;

--Challenge 
UPDATE students SET city = "jucas";

UPDATE students SET city = "juazeiro" WHERE id = 1;