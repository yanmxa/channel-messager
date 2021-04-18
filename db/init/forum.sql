DROP DATABASE IF EXISTS `forum`;
CREATE DATABASE `forum`;
USE `forum`;

DROP TABLE IF EXISTS `channel`;

CREATE TABLE `channel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `channel` WRITE;

INSERT INTO `channel` (`id`, `name`)
VALUES
	(1,'周星驰'),
	(2,'周润发');

UNLOCK TABLES;



DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  `channelId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `message` WRITE;

INSERT INTO `message` (`id`, `title`, `content`, `channelId`, `createdAt`)
VALUES
	(1,'唐伯虎点秋香','周星驰巩俐联合出演',1,'2021-04-15 09:42:34'),
	(2,'幸运一条龙','哈哈哈哈或 范德萨的范德萨f',1,'2021-04-15 09:43:39'),
	(3,'审死官','是是是是生或死Fiatf',1,'2021-04-15 09:43:57'),
	(4,'鹿鼎记','法第三方三房f',1,'2021-04-15 09:44:11'),
	(5,'百变星君','巴巴把啊啊',1,'2021-04-15 09:44:31');

UNLOCK TABLES;
