-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 11:15 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sudisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `alarm`
--

CREATE TABLE `alarm` (
  `alarm_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `camera` varchar(12) NOT NULL,
  `alarm_type` varchar(15) NOT NULL,
  `image` varchar(255) NOT NULL,
  `datetime` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alarm`
--

INSERT INTO `alarm` (`alarm_id`, `dept_id`, `camera`, `alarm_type`, `image`, `datetime`) VALUES
(85, 19, 'Camera 10', 'Warning', '1696331065707-frame553e534b-2bc2-4c3c-9d4d-708b1d34ca57.jpg', '2023-10-03T16:34:25.755Z'),
(86, 19, 'Camera 10', 'Warning', '1696331443844-frame572d87c5-c142-438e-9a7f-db259cda7ed0.jpg', '2023-10-03T16:40:43.915Z'),
(87, 19, 'Camera 10', 'Warning', '1696331460994-frameb74cca17-128d-4d3c-8f18-0af605811ef6.jpg', '2023-10-03T16:41:01.042Z'),
(88, 19, 'Camera 10', 'Warning', '1696331573884-framee914ba54-b211-4b13-ab1b-b584f1257aae.jpg', '2023-10-02T16:42:53.982Z'),
(89, 30, 'Cam 1', 'Warning', '1696403194026-download.jpg', '2023-10-04T12:37:02.228Z'),
(90, 19, 'Camera 10', 'Warning', '1696405621735-frame0480449c-cbaa-4f57-a40e-a2870c93237b.jpg', '2023-10-04T13:17:01.786Z'),
(91, 19, 'Camera 10', 'Warning', '1696407149501-framedec11982-1d1c-45a8-8e0a-86e1773c18aa.jpg', '2023-10-04T13:42:29.582Z'),
(92, 19, 'Camera 10', 'Warning', '1696407151194-framef9bae2d8-b7ea-4c86-b153-d8cbbbcfe695.jpg', '2023-10-04T13:42:31.275Z'),
(93, 19, 'Camera 10', 'Warning', '1696408859986-framebfc0532f-b832-472d-93b1-80c13a18353d.jpg', '2023-10-04T14:11:00.081Z');

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `auth_id` int(11) NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(55) NOT NULL,
  `isActive` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`auth_id`, `username`, `password`, `name`, `isActive`) VALUES
(1, 'admin', '$2a$04$qKcXYwiMkLEE.E2fvNH.S.sTy5WQ15nzeKx9y0AozVoiKO399AnNa', 'Mrinmoy Ghosh', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `depts`
--

CREATE TABLE `depts` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(45) NOT NULL,
  `emails` varchar(255) NOT NULL,
  `head_name` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `depts`
--

INSERT INTO `depts` (`dept_id`, `dept_name`, `emails`, `head_name`) VALUES
(19, 'Manufacturing', 'upasanabharti145@gmail.com,upasanabharti146@gmail.com', 'Upasana '),
(25, 'System', 'mrinmoygh081@gmail.com', 'Mrinmoy Ghosh'),
(30, 'IT', 'mrinmoygh081@gmail.com,upasanabharti145@gmail.com', 'Mrinmoy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alarm`
--
ALTER TABLE `alarm`
  ADD PRIMARY KEY (`alarm_id`);

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`auth_id`);

--
-- Indexes for table `depts`
--
ALTER TABLE `depts`
  ADD PRIMARY KEY (`dept_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alarm`
--
ALTER TABLE `alarm`
  MODIFY `alarm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `auth_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `depts`
--
ALTER TABLE `depts`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
