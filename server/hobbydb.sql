-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2022 at 08:40 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hobbydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `hobbylist`
--

CREATE TABLE `hobbylist` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `passionLevel` text NOT NULL,
  `hobbyName` text NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hobbylist`
--

INSERT INTO `hobbylist` (`id`, `userID`, `passionLevel`, `hobbyName`, `year`) VALUES
(10, 2, 'Medium', 'hello', 12344),
(19, 1, 'High', 'Coding', 2016),
(21, 42, 'Medium', 'management', 2021);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `userName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userName`) VALUES
(1, 'Khizar'),
(2, 'Junaid'),
(10, 'jinaky'),
(38, 'thing one'),
(39, 'Go for Masters'),
(40, 'Abrar'),
(41, 'masam'),
(42, 'Aniqa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hobbylist`
--
ALTER TABLE `hobbylist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk` (`userID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hobbylist`
--
ALTER TABLE `hobbylist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hobbylist`
--
ALTER TABLE `hobbylist`
  ADD CONSTRAINT `fk` FOREIGN KEY (`userID`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
