CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id integer(30) NOT null auto_increment,
  burger_name varchar(100) not NULL,
  devoured boolean not NULL default 0,
  date timestamp DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY(id)
);
