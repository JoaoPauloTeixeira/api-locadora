# API-LOCADORA
* Intuito desse repo é conter WebAPI com funcionalidades para locadora 🚗

### Ferramentas utilizadas 🔨

- [x] Node.js
- [x] Express.js
- [x] TypeScript
- [x] PostgresSQL
- [x] Docker (compose)

## 💻 Arquitetura

Visando um projeto "pequeno" o modelo escolhido foi monolitico, utilizando uma base de código para executar as funcionalides no servidor.
Contudo também foi adotado o modelo de Clean Architecture com o objetivo de padronizar e organizar o código desenvolvido e
favorecer a sua reusabilidade, por camadas separadas por suas responsabilidades.

![image](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

A arquitetura utiliza tem como objetivo mover as dependências apenas dos níveis externos para os internos.
Os níveis mais internos não podem mencionar as variáveis, funções e classes que existem nas camadas externas.
Uma das vantagens é que o sistema fica completamente testável, pois as regras de negócios podem ser validadas sem a necessidade da interface do usuário, banco de dados, servidor ou qualquer outro elemento externo e facilita a manutenção.

As camadas utilizadas sao as seguintes:
 - 🏭 1-enterprise é uma camada onde armazena as regras de negócios centrais e as entidades principais da aplicação.
 - 💼 2-business é a camada aonde fica os casos de uso da aplicação.
 - 🕹 3-presentation é a camada que fica entre a camada mais externa e a business com objetivo de ser apenas um controlador de requicisoes e respostas da aplicação.
-  🌐 4-framework é a camada que lida com funcionalidades que dependem de de detalhes e tecnologias externas como pacotes, libs, ORM, requicisoes para outras API´s, etc.
## ➡️ Fluxograma das funcionalidades do projeto

Fluxograma dos endpoints disponivel no google drive.

 - https://drive.google.com/drive/folders/1fOOmPAIbE_DabFhS8-BbsN1KNw4_0XAB?usp=sharing

## 🚀 Executando projeto

Para executar o projeto será necessário ter Docker instalado pois, facilitara fazendo com que nao seja necessario instalar versao do Node utilizada, pacotes do projeto e criacao de um DB local.

1 - Docker network:

```
docker network create locadora
```

2 - Docker build:

```
docker compose build
```

2 - Docker up:

```
docker compose up -d
```

💯 Pronto! Agora será possível acessar o Banco de dados localmente e acessar os endpoints do projeto.

⚠️ Caso este processo não funcione, será necessário seguir os passos abaixo:

- instalar versão v18.20.4 do node
- executar npm install ou yarn para instalar os pacotes
- executar o comando docker run -d --name loca_seidor_db -p 5432:5432 -e POSTGRES_PASSWORD=loca_seidor_2024 -e POSTGRES_DB=loca_seidor_db -e POSTGRES_USER=postgres -v pgdata:/var/lib/postgresql/data postgres -d
  para criar o banco de dados manualmente.
- npm run start ou yarn start pra iniciar a aplicacao.

## ⏺️ Usando api-locadora

Para usar foi disponibilziada uma collection do postman com todas as requicisoes do propjeto. O arquivo está na raíz do projeto com nome loca-seidor.postman_collection, basta importar e utilizar.



