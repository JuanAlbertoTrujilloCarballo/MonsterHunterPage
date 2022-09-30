USE monsterhunter;
DROP TABLE IF EXISTS `monsters`;
CREATE TABLE `monsters` (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`), 
name VARCHAR (40), title VARCHAR (80), weakness VARCHAR(20), url VARCHAR(300));
INSERT INTO monsters VALUES (1, "Rathalos", "Rey de los cielos", "draco", "https://i.pinimg.com/564x/81/3a/c2/813ac2979b40dc13e55a5de9208971ec.jpg");
INSERT INTO monsters VALUES (2, "Tigrex","Wyvern Rugidor " , "trueno", "https://i.pinimg.com/564x/a3/2c/ef/a32cefd67ab381619669606025fd2a86.jpg");
INSERT INTO monsters VALUES (3, "Dalamadur","Dragón Serpiente Rey " ,"draco","https://static.wikia.nocookie.net/monsterhunterespanol/images/0/00/MH4U-Icono_Dalamadur.png/revision/latest/smart/width/250/height/250?cb=20170729094759&path-prefix=es");
SELECT * FROM monsters;
