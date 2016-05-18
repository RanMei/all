-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 02 月 15 日 06:02
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `fytpy`
--

-- --------------------------------------------------------

--
-- 表的结构 `deliveryinformation`
--

CREATE TABLE IF NOT EXISTS `deliveryinformation` (
  `username` char(100) NOT NULL,
  `consignee` char(100) NOT NULL,
  `phoneNumber` char(100) NOT NULL,
  `deliveryAddress` char(100) NOT NULL,
  `date` char(100) NOT NULL,
  `status` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `deliveryinformation`
--

INSERT INTO `deliveryinformation` (`username`, `consignee`, `phoneNumber`, `deliveryAddress`, `date`, `status`) VALUES
('403177368@qq.com', '赵六', '15911111111', '中国北京', '2016-02-09T01:25:03.764Z', ''),
('403177368@qq.com', '王五', '15911111111', '中国北京', '2016-02-09T03:26:43.949Z', '');

-- --------------------------------------------------------

--
-- 表的结构 `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `itemID` char(100) DEFAULT NULL,
  `name` char(100) DEFAULT NULL,
  `description` char(100) NOT NULL,
  `specification` char(100) NOT NULL,
  `price` char(100) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `class_` char(20) NOT NULL,
  `sub_class` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `items`
--

INSERT INTO `items` (`itemID`, `name`, `description`, `specification`, `price`, `quantity`, `class_`, `sub_class`) VALUES
('1602091546', '星战暴风兵i6手机壳', 'PC材质 一体成形', '--', '45', 1, '数码配件', '手机配件'),
('1602091557', 'HEROCROSS星球大战白兵', 'Q版可动白兵 细致涂装 专属武器', '--', '398', 1, '玩具模型', '仿真收藏'),
('1602091550', '星球大战入耳式耳机', '科学声场 清晰音质 星战炫酷设计 唤醒电影情结', '--', '60', 1, '数码配件', '电脑周边'),
('1602091458', '星战BB-8智能球型机器人', '真实动作 培养个性 自主特性 全息投影 app端操控', '--', '1198', 1, '玩具模型', '模型公仔'),
('1602091535', '钢铁侠特供珍藏车载充电器', '眼睛LED灯光效果 Mark7 、Mark42、爱国者版3款', '--', '188', 1, '数码配件', '车载用品');

-- --------------------------------------------------------

--
-- 表的结构 `orderdetials`
--

CREATE TABLE IF NOT EXISTS `orderdetials` (
  `orderID` char(100) NOT NULL,
  `itemID` char(100) NOT NULL,
  `specification` char(100) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `orderID` char(100) NOT NULL,
  `date` char(255) NOT NULL,
  `username` char(255) NOT NULL,
  `consignee` char(100) NOT NULL,
  `phoneNumber` char(100) NOT NULL,
  `deliveryAddress` char(100) NOT NULL,
  `totalPrice` float NOT NULL,
  PRIMARY KEY (`orderID`),
  KEY `date` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orders`
--

INSERT INTO `orders` (`orderID`, `date`, `username`, `consignee`, `phoneNumber`, `deliveryAddress`, `totalPrice`) VALUES
('40320160209093954', '2016-02-09 09:39:54', '403177368@qq.com', '', '', '', 443),
('40320160209094924', '2016-02-09 09:49:24', '403177368@qq.com', '', '', '', 443),
('40320160209095827', '2016-02-09 09:58:27', '403177368@qq.com', '', '', '', 443),
('40320160209102704', '2016-02-09 10:27:04', '403177368@qq.com', '赵四', '13011111111', '中国北京1111111111', 443),
('40320160209102748', '2016-02-09 10:27:48', '403177368@qq.com', '赵', '13011111111', '中', 443),
('40320160209160054', '2016-02-09 16:00:54', '403177368@qq.com', '赵六', '15911111111', '中国北京', 398),
('40320160209224850', '2016-02-09 22:48:50', '403177368@qq.com', '赵六', '15911111111', '中国北京', 45),
('40320160209225348', '2016-02-09 22:53:48', '403177368@qq.com', '赵六', '15911111111', '中国北京', 45);

-- --------------------------------------------------------

--
-- 表的结构 `shoppingcart`
--

CREATE TABLE IF NOT EXISTS `shoppingcart` (
  `username` char(100) NOT NULL,
  `itemID` char(100) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoppingcart`
--

INSERT INTO `shoppingcart` (`username`, `itemID`, `quantity`) VALUES
('403177368@qq.com', '1602091458', 1),
('403177368@qq.com', '1602091546', 1),
('403177368@qq.com', '1602091557', 1),
('403177368@qq.com', '1602091550', 1);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('111@', '111111'),
('222@', '111111'),
('403177368@qq.com', '111111'),
('555@', '111111');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
