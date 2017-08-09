-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 08 月 09 日 13:36
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `isee`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(20) NOT NULL,
  `password` char(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sex` varchar(4) NOT NULL,
  `birthday` date DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `user`, `password`, `email`, `sex`, `birthday`, `date`) VALUES
(1, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-04'),
(2, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-04'),
(3, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-04'),
(4, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-04'),
(5, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-04'),
(6, '1111111111111111', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '1111', 'on', '0000-00-00', '2017-08-04'),
(7, '1111111111111111', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '1111', 'on', '0000-00-00', '2017-08-04'),
(8, '1111111111111111', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '1111', 'on', '0000-00-00', '2017-08-04'),
(9, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '', 'on', '0000-00-00', '2017-08-06'),
(10, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '', 'on', '0000-00-00', '2017-08-06'),
(11, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-06'),
(12, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-06'),
(13, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '1997-07-15', '2017-08-06'),
(14, 'root1', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-06'),
(15, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-06'),
(16, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '1997-07-17', '2017-08-06'),
(17, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-06'),
(18, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '11', 'on', '1997-07-22', '2017-08-07'),
(19, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-07'),
(20, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-07'),
(21, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-07'),
(22, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', '', 'on', '0000-00-00', '2017-08-07'),
(23, '', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '', '', '0000-00-00', '2017-08-07');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
