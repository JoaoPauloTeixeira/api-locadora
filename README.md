# API-LOCADORA
> Intuito desse repo é conter WebAPI com funcionalidades para locadora

### Ferramentas utilizadas

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
Com isso os códigos nas camadas internas não precisam ter conhecimento necessariamente das funções nas camadas externas. Os níveis mais internos não podem mencionar as variáveis, funções e classes que existem nas camadas externas.
Uma das vantagens é que o sistema fica completamente testável, pois as regras de negócios podem ser validadas sem a necessidade da interface do usuário, banco de dados, servidor ou qualquer outro elemento externo e facilita a manutenção.

## 🚀 Fluxograma das funcionalidades do projeto

Fluxograma Motorista
![image]()[Uploading fluxograma_locadora.drawio…]()


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

Pronto! Agora será possível acessar o Banco de dados localmente e acessar os endpoints do projeto.

## ☕ Usando api-locadora

Para usar foi disponibilziada uma collection do postman com todas as requicisoes do propjeto. O arquivo está na raíz do projeto com nome loca-seidor.postman_collection, basta importar e utilizar.



