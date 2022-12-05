CREATE DATABASE scores23;

USE scores23;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    cadastrouTimes INT
);

CREATE TABLE selecoes
(IdSelecao INT PRIMARY KEY,
nome VARCHAR(50),
titulos INT);

CREATE TABLE torce
(fkUsuario INT,
foreign key(fkUsuario) references usuario(idUsuario),
fkSelecao INT,
foreign key(fkSelecao) references Selecoes(idSelecao),
primary key(fkUsuario,fkSelecao));

INSERT INTO selecoes VALUES
(1,'Arábia Saudita', 0),
(2, 'Argentina', 2),
(3, 'Austrália', 0),
(4, 'País de Gales', 0),
(5, 'Bélgica', 0),
(6, 'Alemanha', 4),
(7, 'Ghana', 0),
(8, 'Holanda', 0),
(9, 'Brasil', 5),
(10, 'Canadá', 0),
(11, 'Coréia do Sul', 0),
(12, 'Inglaterra', 1),
(13, 'Irã', 0),
(14, 'Japão', 0),
(15, 'Croácia', 0),
(16, 'Dinamarca', 0),
(17, 'Equador', 0),
(18, 'Espanha', 1),
(19, 'França', 2),
(20, 'Marrocos', 0),
(21, 'México', 0),
(22, 'Polônia', 0),
(23, 'Portugal', 0),
(24, 'Senegal', 0),
(25, 'Sérvia', 0),
(26, 'Suiça', 0),
(27, 'Uruguai', 2),
(28, 'Estados Unidos', 0);

-- instruções executadas no models                
UPDATE usuario SET cadastrouTimes = 1 WHERE idUsuario = 1;
        
SELECT selecoes.nome,COUNT(fkSelecao) 'Quantidade'  FROM selecoes JOIN torce ON fkSelecao = idSelecao
	JOIN usuario ON idusuario = fkUsuario group by selecoes.nome order by COUNT(fkselecao) desc limit 5;
    
SELECT selecoes.*,COUNT(fkSelecao) 'Quantidade'  FROM selecoes
 	LEFT JOIN torce ON fkSelecao = idSelecao group by selecoes.nome 
    order by COUNT(fkSelecao) ASC LIMIT 1;
    
SELECT * FROM usuario 
    JOIN torce ON idUsuario = fkUsuario WHERE email = 'gabriel.ssilva@sptech.school' AND senha = '1234';
    
SELECT * from selecoes ORDER BY titulos DESC LIMIT 1;
    
SELECT * FROM usuario JOIN torce ON idUsuario = fkUsuario
		JOIN selecoes ON idSelecao = fkSelecao 	WHERE usuario.nome = 'Fabiana';