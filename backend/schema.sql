create database raio;
create table users(
  id serial primary key,
  email varchar(100),
  name varchar(100),
  pass varchar(100)
);
create table oferts(
  id serial primary key,
  title varchar(100),
  value float,
  description varchar(100),
  company varchar(100),
  user_name varchar(100)
)