# Aprofundamento SQL

### Preparação do banco
use `joy-419467-danielle-kensy`;

SET SQL_SAFE_UPDATES = 0;

## criando tabela
~~~~
CREATE TABLE Actor(

	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

CREATE TABLE Movie (

    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
~~~~

## Ver a estrutura de uma tabela
DESCRIBE Actor;

## Apagar tabela
DROP TABLE Actor;

## Inserir valores
~~~~ INSERT INTO Actor (id, name, salary, birth_date, gender) 

VALUES 
   ('001','Tony Ramos',400000,'1948-08-25','male'),
   ('002','Camila Pitanga',320000,'1977-06-14','female'),
   ('003','Antônio Fagundes',230000,'1949-04-10','male'),
   ('004','Fernanda Montenegro',400000,'1929-10-16','female'),
   ('005','Juliana Paes',719333,'1936-10-05','female');
   
INSERT INTO Movie (id, name, synopsy, release_date, rating)

VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)

VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)

VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
); 
~~~~ 
# Ler valores
SELECT * FROM Actor;

SELECT * FROM Movie;

# Deletar valores
DELETE FROM Actor WHERE id = "001";

# Exercício 1
-- a) Altera a tabela ator retirando a coluna salary.

-- b) Altera a tabela ator mudando o nome da coluna de gender para sex.

-- c) Altera a tabela ator mudando o tipo pra um varchar que aceita até 255 caracteres.

-- d:
~~~~
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~~

# Exercício 2
-- a)
~~~~ UPDATE Actor
SET name = "Danizinha", birth_date = "2003-02-22"
WHERE id = "003"; 
~~~~

-- b)
~~~~ UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
~~~~

-- c)
~~~~ UPDATE Actor
SET name = "Danizinha", salary= 30000, birth_date = "2003-02-22", gender = "female"
WHERE id = "003";
~~~~
-- d) não deu erro, simplesmente retornou que nenhuma coluna foi afetada e não ocorreu nenhuma mudança.
~~~~ UPDATE Actor
SET name = "Jorgin", birth_date = "2003-02-22"
WHERE id = "009";
~~~~

# Exercício 3
-- a)
~~~~
 DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~~
-- b)
~~~~
DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;
~~~~

# Exercício 4
-- a)
~~~~
SELECT MAX(salary) from Actor;
~~~~
-- b)
~~~~
SELECT MIN(salary) from Actor WHERE gender = "female";
~~~~
-- c)
~~~~
SELECT COUNT(*) from Actor WHERE gender = "female";
~~~~
-- d)
~~~~
SELECT SUM(salary) from Actor;
~~~~

# Exercício 5
-- a) conte o genêro da tabela ator e agrupe por genêro
-- b)
~~~~
SELECT id, name FROM Actor ORDER BY name DESC;
~~~~
-- c)
~~~~
SELECT * FROM Actor ORDER BY salary;
~~~~
-- d)
~~~~
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; 
~~~~
-- e)
~~~~
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
~~~~

# Exercício 6
-- a)
~~~~
ALTER TABLE Movie ADD playing_limit_date VARCHAR(20);
~~~~
-- b)
~~~~
ALTER TABLE Movie CHANGE rating Rating FLOAT; 
~~~~
-- c)
~~~~
UPDATE Movie SET playing_limit_date = "2022-04-30" WHERE id = "003";
UPDATE Movie SET playing_limit_date = "2022-03-30" WHERE id = "002";
~~~~
-- d) não deu erro, simplesmente retornou que nenhuma coluna foi afetada e não ocorreu nenhuma mudança.
~~~~
DELETE FROM Movie WHERE id = "004";
UPDATE Movie SET synopsy="Filme bão ein" WHERE id = "004";
~~~~ 