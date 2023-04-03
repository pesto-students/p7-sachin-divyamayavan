create database Week16;

use Week16;

CREATE TABLE CITIES (
cityId int not null primary key auto_increment,
cityName char(50),
state char(50)
);
INSERT INTO CITIES(cityName,state)
values('Indira Nagar','Bangalore'),
('Jayanagar','Bangalore'),
('Rajaji Nagar','Bangalore'),
('Koramangala','Bangalore'),
('Malleshwaram','Bangalore');

SELECT * FROM CITIES;

CREATE TABLE WAREHOUSES(
warehouseId integer not null primary key auto_increment,
warehouseName char(10),
warehouseLocation char(20),
state char(20),
cityId int,
FOREIGN KEY (cityId) REFERENCES CITIES(cityId)
);
INSERT INTO WAREHOUSES(warehouseName,warehouseLocation,state)
values('AAA','Indira Nagar','Bangalore'),
('BBB','Jayanagar','Bangalore'),
('CCC','Rajaji Nagar','Bangalore'),
('DDD','Koramangala','Bangalore'),
('EEE','Malleshwaram','Bangalore');

SELECT * FROM WAREHOUSES;
UPDATE WAREHOUSES SET cityId =1 where warehouseName = 'AAA';
SET SQL_SAFE_UPDATES = 0;
UPDATE WAREHOUSES set cityId = 2 where warehouseName = 'BBB';
UPDATE WAREHOUSES set cityId = 3 where warehouseName = 'CCC';
UPDATE WAREHOUSES set cityId = 4 where warehouseName = 'DDD';
UPDATE WAREHOUSES set cityId = 5 where warehouseName = 'EEE';

CREATE TABLE STORES(
storeId integer not null primary key auto_increment,
storeName char(30),
storeLocation char(10),
warehouseId int,
FOREIGN KEY (warehouseId) REFERENCES WAREHOUSES(warehouseId)
);

ALTER TABLE STORES  modify column storeLocation char(30);

INSERT INTO STORES(storeName,storeLocation)
values('Mini Bazaar','Indira Nagar'),
('Divya food grains','Koramangala'),
('Balaji Departmental store','Malleshwaram'),
('Fine fair super market','Rajaji Nagar'),
('Miniso','Koramangala');

UPDATE STORES SET warehouseId = 1 where storeName = 'Mini Bazaar';
UPDATE STORES SET warehouseId = 2 where storeName = 'Divya food grains';
UPDATE STORES SET warehouseId = 3 where storeName = 'Balaji Departmental store';
UPDATE STORES SET warehouseId = 4 where storeName = 'Fine fair super market';
UPDATE STORES SET warehouseId = 5 where storeName = 'Miniso';

SELECT * FROM STORES;

CREATE TABLE CUSTOMER(
customerId int not null primary key auto_increment,
customerName char(20),
customerAddress varchar(50)
);
INSERT INTO CUSTOMER(customerName,customerAddress)
values('Divya','28/1,Indira Nagar,bangalore'),
('Ramya','45/7,Koramangala,bangalore'),
('priya','99/7,Rajaji Nagar,bangalore'),
('Kavya','1/65,Malleshwaram,bangalore'),
('Sathya','1/81,Rajaji Nagar,bangalore');

SELECT * FROM CUSTOMER;

CREATE TABLE ORDERS(
orderId integer not null primary key auto_increment,
orderName char(50),
ArraivalDay char(50),
customerId int,
FOREIGN KEY (customerid) REFERENCES CUSTOMER(customerId)
);
INSERT INTO ORDERS(orderName,ArraivalDay)
values('Handbag','Monday'),
('Watch','Tuesday'),
('Bag','Wednesday'),
('Mobile Phone','Thursday'),
('Dress','Fraiday');

UPDATE ORDERS SET customerId = 1 where orderName = 'Handbag';
UPDATE ORDERS SET customerId = 2 where orderName = 'Watch';
UPDATE ORDERS SET customerId = 3 where orderName = 'Bag';
UPDATE ORDERS SET customerId = 4 where orderName = 'Mobile Phone';
UPDATE ORDERS SET customerId = 5 where orderName = 'Dress';
SELECT * FROM ORDERS;

CREATE TABLE ITEMS(
itemId integer not null primary key auto_increment,
itemDescription text,
itemWeight decimal,
itemCost decimal,
orderId int,
FOREIGN KEY (orderId) REFERENCES ORDERS(orderId)
);
INSERT INTO ITEMS(itemDescription,itemWeight,itemCost)
values('abc','100.00','150.0'),
('dfg','50.25','200.0'),
('thf','89.12','250.0'),
('jifu','46.00','650.0'),
('hhgd','500.00','1200');

UPDATE ITEMS SET orderId = 1 where itemDescription = 'abc';
UPDATE ITEMS SET orderId = 2 where itemDescription = 'dfg';
UPDATE ITEMS SET orderId = 3 where itemDescription = 'thf';
UPDATE ITEMS SET orderId = 4 where itemDescription = 'jifu';
UPDATE ITEMS SET orderId = 5 where itemDescription = 'hhgd';

SELECT * FROM ITEMS;

SELECT MIN(itemWeight) as itemWeight from ITEMS;
SELECT * FROM WAREHOUSES WHERE state = 'Bangalore';
SELECT * FROM WAREHOUSES WHERE warehouseName = 'DDD';
SELECT MAX(storeName) as storeName from STORES;
SELECT MIN(orderName) as orderName from ORDERS;


