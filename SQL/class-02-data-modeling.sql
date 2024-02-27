CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES courses(id)
);

DROP TABLE students;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    workload INTEGER NOT NULL
);

DROP TABLE courses;

INSERT INTO students(name, email, id_course) VALUES
    ("Erick", "erick@gmail.com", 1),
    ("Jorge", "jorge@gmail.com", 2),
    ("Daniel", "daniel@gmail.com", 2);
    

INSERT INTO courses(name, workload) VALUES 
    ("Web Development", 360),
    ("Data Analist", 240),
    ("Cyber Security", 240);


SELECT * FROM students;

SELECT * FROM courses;