-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mystore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mystore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mystore` DEFAULT CHARACTER SET utf8 ;
USE `mystore` ;

-- -----------------------------------------------------
-- Table `mystore`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


-- -----------------------------------------------------
-- Table `mystore`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `customer` (
  `login` VARCHAR(255) NULL,
  `password` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `mobile` VARCHAR(45) NULL,
  `email` VARCHAR(55) NULL,
  `address` VARCHAR(155) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

ALTER TABLE `customer`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;


-- -----------------------------------------------------
-- Table `mystore`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `images` VARCHAR(255) NOT NULL,
  `prices` FLOAT NOT NULL,
  `details` LONGTEXT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `subcategory` VARCHAR(45) NOT NULL,
  `date_added` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

ALTER TABLE `products`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=52;

-- -----------------------------------------------------
-- Table `mystore`.`customer_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `customer_cart` (
  `cartid` INT NOT NULL,
  `customerid` INT NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `details` LONGTEXT NOT NULL,
  `price` FLOAT NOT NULL,
  `quantity` INT NOT NULL,
  `date_added` DATE NOT NULL,
  PRIMARY KEY (`cartid`))
ENGINE = InnoDB;

ALTER TABLE `customer_cart`
MODIFY `cartid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
