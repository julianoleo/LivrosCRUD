/*
 Navicat Premium Data Transfer

 Source Server         : Mysql DB_Quality
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : www.qualitysys.com.br:3300
 Source Schema         : dblivros

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 03/06/2021 11:29:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for livro
-- ----------------------------
DROP TABLE IF EXISTS `livro`;
CREATE TABLE `livro`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `autor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of livro
-- ----------------------------
INSERT INTO `livro` VALUES (1, 'Candongas', 'José Maria');

SET FOREIGN_KEY_CHECKS = 1;
