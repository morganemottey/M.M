

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'momo', 'momo');
INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(2, 'toto', 'toto');
INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(3, 'tata', 'tata');




INSERT INTO `customer` (`login`, `password`, `name`, `mobile`, `email`, `address`, `city`, `state`,`id`) VALUES
('momo', 'momo', 'Morgane', '9704159596', 'momo@gmail.com', 'PhilipeLeCompte', 'Hossegor', 'France',11),
('toto', 'toto', 'Lisa', '9704159593', 'toto@gmail.com', 'Routedupont', 'Biarritz', 'France',12);



INSERT INTO `customer_cart` (`cartid`,`customerid` ,`product_name`, `details`, `price`, `quantity`, `date_added`) VALUES
(4, 19, 'TeeShirt', 'Long Sleeve', 28.99, 1, '2014-11-11');
INSERT INTO `customer_cart` (`cartid`,`customerid`, `product_name`, `details`, `price`, `quantity`, `date_added`) VALUES
(5, 19, 'Pull', 'Coton', 128.99, 1, '2014-11-11');
INSERT INTO `customer_cart` (`cartid`,`customerid`, `product_name`, `details`, `price`, `quantity`, `date_added`) VALUES
(6, 19, 'Shirt', 'Long Sleeve', 38.99, 1, '2014-11-11');
INSERT INTO `customer_cart` (`cartid`,`customerid` ,`product_name`, `details`, `price`, `quantity`, `date_added`) VALUES
(7, 19, 'Trousers', 'Sleeve', 228.99, 1, '2014-11-11');






