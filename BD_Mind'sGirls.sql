
-- CRIAÇÃO DO BANCO DE DADOS MIND'S GIRLS
CREATE DATABASE Minds_Girls;
use Minds_Girls;

-- CADASTRO DO USUÁRIO NO WEBSITE
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
cpf char(11),
senha varchar(45)
);

-- SEGUINDO A LÓGICA QUE 1 FORMAÇÃO PODE TER MUITAS CIENTISTAS E 1 CIENTISTA PODE TER VÁRIAS FORMAÇÕES É CRIADA UMA TABELA N:N

-- FORMAÇÕES
create table Formacao(
idFormacao int primary key auto_increment,
Formacao varchar(45)
);

-- CADASTRO DAS HISTÓRIAS DAS CIENTISTAS 
create table Cientista(
idCientista int primary key auto_increment,
nomeCompleto varchar(45),
nacionalidade varchar(45),
nascimento date,
falecimento date,
subtitulo varchar (100),
bio varchar(5000)
);

-- VARIAS FORMAÇÕES: VÁRIAS CIENTISTAS
create table Formacao_Cientista(
fkCientista int,
fkFormacao int,
primary key(fkCientista,fkFormacao),
foreign key (fkCientista) references Cientista(idCientista),
foreign key (fkFormacao) references Formacao(idFormacao)
);

-- VISUALIZAÇÃO DOS USUÁRIOS E CIENTISTAS
select*from usuario;
select*from Cientista;
select*from Formacao;
select*from Formacao_Cientista;


-- VISUALIZAÇÃO DA REPRESENTAÇÃO DOS GRÁFICOS
-- Gráfico de Formação
select form.Formacao Formação, count(formC.fkFormacao) 'Qtd de Cientistas' 
from Cientista cien
join Formacao_Cientista formC
on cien.idCientista= formC.fkCientista
join Formacao form
on form.idFormacao= formC.fkFormacao
group by formC.fkFormacao;

-- Gráfico de Nacionalidade
select nacionalidade País, count(nacionalidade) 'Nascidas no mesmo País'
from Cientista
group by nacionalidade;  


/*Comando pra apagar os dados usuários*/
-- truncate table usuario;

/*Comando pra apagar o Banco de Dados*/
-- drop DATABASE Minds_Girls;
