create database sdet_learning;

use sdet_learning

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users
VALUES (1,'standard_user','secret_sauce');