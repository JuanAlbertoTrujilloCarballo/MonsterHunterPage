DROP TABLE IF EXISTS `monsters`;
CREATE TABLE `monsters` (id INT, name VARCHAR (40), description VARCHAR (750), weakness VARCHAR(20));
INSERT INTO monsters VALUES (1, "Rathalos", "Terribles wyverns llamados 'Reyes de los cielos'. Junto con las Rathian, acechan amplios territorios cerca de sus nidos. Los Rathalos descienden sobre los invasores desde el cielo, atacando con veneno, garras y fuego.", "draco");
INSERT INTO monsters VALUES (2, "Tigrex","Wyverns voladores cuyo origen primitivo es obvio. De carácter muy virulento, atacan ferozmente con garras, mandíbula y miembros desarrollados. Habitan un amplio área en busca de una presa y se les ha visto incluso en regiones azotadas por el frío. " , "trueno");
INSERT INTO monsters VALUES (3, "Dalamadur","Un Dragón Anciano enorme, de un tamaño descomunal. La única mención de su existencia está solo en los cuentos, que dicen que puede doblegar la faz del mundo y aplastar montañas con un solo movimiento. " , "draco");
SELECT * FROM monsters;
