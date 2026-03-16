CREATE DATABASE talentbridge;

USE talentbridge;

CREATE TABLE talents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    area VARCHAR(100),
    skills TEXT
);