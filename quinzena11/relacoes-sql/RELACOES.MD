# Relações SQL
## Exercício 1
a) É uma referência de um dado que vem de outra tabela.

b):
~~~
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
   ('001','Mt bom', 7,'003'),
~~~ 

c) 0 row(s) affected, ao invpes de retornar um erro a query é executada porém nenhuma linha é afetada, já que a linha correspondente a esse filme não existe.

d)
~~~
ALTER TABLE Movie DROP COLUMN rating;
~~~

## Exercício 2
a) Uma tabela que possui duas chaves estrangeiras, ou seja aponta para duas tabelas diferentes representando uma relação N:M.

b) 
~~~
INSERT INTO MovieCast VALUES
('001', '002'), ('003','002'), ('001','003'), 
('003','003'), ('004','002'), ('004','003'); 
~~~

c) Error code: 1452, não é possível fazer update já que não existe um id que faça referência na tabela de onde está vindo a foreign key.

d) Não é possível por conta das relações que o ator possui.

## Exercício 3
a) É o operador que define a condição para fazer o join entre as tabelas.

b)
~~~
SELECT movie_id, rating FROM Movie 
INNER JOIN Rating ON movie_id = Rating.movie_id;
~~~

