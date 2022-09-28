USE monsterhunter;
DROP TABLE IF EXISTS `monsters`;
CREATE TABLE `monsters` (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`), 
name VARCHAR (40), title VARCHAR (80), weakness VARCHAR(20));
INSERT INTO monsters VALUES (1, "Rathalos", "Rey de los cielos", "draco");
INSERT INTO monsters VALUES (2, "Tigrex","Wyvern Rugidor " , "trueno");
INSERT INTO monsters VALUES (3, "Dalamadur","Dragón Serpiente Rey " , "draco");
SELECT * FROM monsters;
