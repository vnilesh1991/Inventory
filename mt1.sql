-- phpMyAdmin SQL Dump
-- version 3.5.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 23, 2019 at 02:32 PM
-- Server version: 5.5.28
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mt1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cr_car`
--

CREATE TABLE IF NOT EXISTS `cr_car` (
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NOT NULL DEFAULT '0',
  `color` varchar(50) NOT NULL DEFAULT '',
  `year` int(11) NOT NULL DEFAULT '0',
  `reg_no` int(11) NOT NULL DEFAULT '0',
  `notes` varchar(250) NOT NULL DEFAULT '',
  `fileurl` varchar(250) NOT NULL DEFAULT '',
  `created_date` datetime NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `cr_car`
--

INSERT INTO `cr_car` (`car_id`, `model_id`, `color`, `year`, `reg_no`, `notes`, `fileurl`, `created_date`, `is_active`) VALUES
(1, 2, 'White', 2018, 2147483647, 'Test', 'http://192.168.2.22/Nilesh/invent/developement/application/cars/car-1/car_pic.jpg', '2019-01-23 19:29:25', 1),
(2, 5, 'Red', 2014, 1120121102, 'Test 2', 'http://192.168.2.22/Nilesh/invent/developement/application/cars/car-2/car_pic.jpg', '2019-01-23 19:31:55', 1),
(3, 6, 'Gray', 2016, 1112451221, 'test 3', 'http://192.168.2.22/Nilesh/invent/developement/application/cars/car-3/car_pic.jpg', '2019-01-23 19:33:02', 1),
(4, 1, 'Green', 2015, 2147483647, 'Test 4', 'http://192.168.2.22/Nilesh/invent/developement/application/cars/car-4/car_pic.jpg', '2019-01-23 19:33:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cr_manufacturer`
--

CREATE TABLE IF NOT EXISTS `cr_manufacturer` (
  `man_id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(250) NOT NULL DEFAULT '',
  `created_date` datetime NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`man_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `cr_manufacturer`
--

INSERT INTO `cr_manufacturer` (`man_id`, `manufacturer`, `created_date`, `is_active`) VALUES
(1, 'TATA', '2019-01-23 17:36:42', 1),
(2, 'Audi', '2019-01-23 17:36:50', 1),
(3, 'BMW', '2019-01-23 17:36:57', 1),
(4, 'Porsche', '2019-01-23 17:37:05', 1),
(5, 'Toyota', '2019-01-23 17:37:34', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cr_models`
--

CREATE TABLE IF NOT EXISTS `cr_models` (
  `model_id` int(11) NOT NULL AUTO_INCREMENT,
  `man_id` int(11) NOT NULL DEFAULT '0',
  `model` varchar(250) NOT NULL DEFAULT '',
  `created_date` datetime NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`model_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `cr_models`
--

INSERT INTO `cr_models` (`model_id`, `man_id`, `model`, `created_date`, `is_active`) VALUES
(1, 1, 'Safari', '2019-01-23 18:07:41', 1),
(2, 2, 'A8', '2019-01-23 18:09:03', 1),
(3, 3, 'AS5', '2019-01-23 18:09:54', 1),
(4, 1, 'Nano', '2019-01-23 18:10:02', 1),
(5, 4, 'P-874', '2019-01-23 18:10:09', 1),
(6, 5, 'WE12', '2019-01-23 18:10:19', 1),
(7, 2, 'A9', '2019-01-23 18:10:25', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
