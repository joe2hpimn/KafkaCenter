
-- Dumping database structure for kafka_center
CREATE DATABASE IF NOT EXISTS `kafka_center` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `kafka_center`;


-- Dumping structure for table kafka_center.alert_group
CREATE TABLE IF NOT EXISTS `alert_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cluster_id` int(11) NOT NULL,
  `topic_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `consummer_group` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `consummer_api` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `threshold` int(11) DEFAULT NULL,
  `dispause` int(11) DEFAULT NULL,
  `mail_to` varchar(1000) COLLATE utf8_bin NOT NULL DEFAULT '',
  `webhook` varchar(1000) COLLATE utf8_bin NOT NULL DEFAULT '',
  `create_date` datetime DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  `disable_alerta` tinyint(1) DEFAULT 0,
  `enable` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.cluster_info
CREATE TABLE IF NOT EXISTS `cluster_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `zk_address` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `broker` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `comments` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `enable` int(11) DEFAULT NULL,
  `broker_size` int(4) DEFAULT 0,
  `kafka_version` varchar(10) COLLATE utf8_bin DEFAULT '',
  `location` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `graf_addr` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.ksql_info
CREATE TABLE IF NOT EXISTS `ksql_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cluster_id` int(11) DEFAULT NULL,
  `cluster_name` varchar(255) DEFAULT NULL,
  `ksql_url` varchar(255) DEFAULT NULL,
  `ksql_serverId` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.task_info
CREATE TABLE IF NOT EXISTS `task_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cluster_ids` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `location` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT '',
  `topic_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `partition` int(11) DEFAULT NULL,
  `replication` int(11) DEFAULT NULL,
  `message_rate` int(50) DEFAULT NULL,
  `ttl` int(11) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  `comments` varchar(1000) COLLATE utf8_bin NOT NULL DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  `approved` int(11) DEFAULT NULL,
  `approved_id` int(11) DEFAULT NULL,
  `approved_time` datetime DEFAULT NULL,
  `approval_opinions` varchar(1000) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.team_info
CREATE TABLE IF NOT EXISTS `team_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `own` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.topic_collection
CREATE TABLE IF NOT EXISTS `topic_collection` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cluster_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `type` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.topic_info
CREATE TABLE IF NOT EXISTS `topic_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cluster_id` int(11) NOT NULL,
  `topic_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `partition` int(11) DEFAULT NULL,
  `replication` int(11) DEFAULT NULL,
  `ttl` bigint(11) DEFAULT NULL,
  `config` varchar(512) COLLATE utf8_bin DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  `comments` varchar(1000) COLLATE utf8_bin NOT NULL DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.user_info
CREATE TABLE IF NOT EXISTS `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `real_name` varchar(255) COLLATE utf8_bin DEFAULT '',
  `email` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `role` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '100',
  `create_time` datetime DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table kafka_center.user_team
CREATE TABLE IF NOT EXISTS `user_team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


