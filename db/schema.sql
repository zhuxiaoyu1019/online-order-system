DROP DATABASE IF EXISTS dashboard;

CREATE DATABASE dashboard;

USE dashboard;

CREATE TABLE customer 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    phone INT(11),
    email VARCHAR(100)
);

CREATE TABLE orderNum
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    amount INT NOT NULL,
    status BOOLEAN NOT NULL
);

CREATE TABLE products 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250),
    img_id INT NOT NULL,
    description VARCHAR(250),
    category_id INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

CREATE TABLE order_items 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    size_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price INT NOT NULL
);

CREATE TABLE category 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE size 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(40) NOT NULL
);

CREATE TABLE add_on 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    item_id INT NOT NULL,
    order_id INT NOT NULL,
    topping_id INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE topping 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price INT
);

CREATE TABLE applicable_toppings 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    toppind_id INT NOT NULL
);

CREATE TABLE price 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    size_id INT NOT NULL,
    product_id INT NOT NULL,
    price INT
);

CREATE TABLE img 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    secure_url VARCHAR(100) NOT NULL,
    cloudinary_id INT NOT NULL
);