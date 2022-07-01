# Automação de testes com Protractor

[![Protractor e2e Tests](https://github.com/thinogueiras/Protractor/actions/workflows/continuous-integration.yml/badge.svg?branch=master)](https://github.com/thinogueiras/Protractor/actions/workflows/continuous-integration.yml)

Projeto realizado com o curso da Escola TAT.

## Pré-requisitos

É necessário que os seguintes sistemas estejam instalados para a execução do projeto.

- Node.js (`16.14.2`) e NPM (`8.5.0`).
- Navegadores: Google Chrome (`100.0.4896.60`) e Mozilla Firefox (`98.0.2`).

## Instalação

Após clonar o projeto, acesse o diretório do mesmo e execute `npm install` para instalar as dependências de desenvolvimento.

## Executando os testes

Execute `npm run pretest:local && npm test` para executar os testes em ambos os navegadores: Chrome e Firefox.

### Executando os testes em um navegador específico

#### Chrome

Execute `npm run pretest:local && npm run test:chrome` para executar os testes somente neste navegador.

#### Firefox

Execute `npm run pretest:local && npm run test:firefox` para executar os testes somente neste navegador.

___

<strong>Thiago Nogueira dos Santos. <br/>
Quality Assurance. </strong>

**LinkedIn:** https://www.linkedin.com/in/thinogueiras/

___
_Um projeto da_ _[Escola Talking About Testing](https://talkingabouttesting.coursify.me)._