- São formas de matermos a confiança na hora de dar manutenção no codigo a longo prazo

- Os testes mais fomosos são:

_Unitários_

- Irá testar uma unidade da sua aplicação

_Integração_

- Irá testa uma comunicação entre duas ou mais unidades

_e2e - ponta a ponta_

- Irá simular um usuario operando na aplicação (Irão verificar se as portas de entradas no nosso back-end estão funcionando de ponta a ponta)

      *PIRÂMIDE DE TESTES*

- E2E(Não depedem de nenhuma tecnologia, não dependem de arquitetura de software) - Lentos

- Integração

- Unitários - Rapido

* Para os testes, usares o `npm i vitest -D`
* Os testes são composto por
* 1 - anunciado(Oque ele propem em fazer)
* 2 - função (fazer a chamada HTTP para criar uma nova transação)
* 3 - validação `expect(responseStatusCode).toEqual(201)`

e para executar o codigo, basta digitar `npx vitest`

- Antes de criarmos os testes, precisaremos instalar `npm i supertest -D` e `npm i -D @types/supertest` para mudarmos a porta host no teste

* Separamos o server em 2 arquivos, nisso podemos utilizar o `app.ts` no nosso arquivo de teste e nisso mudar a porta para outra diferente do server atual

* `expect(response.statusCode).toEqual(201)` ou `.expect(201)`

* `beforeAll()` posso executar algum codigo antes que todos os testes executem, mas lembrando que ele executará apenas uma unica vez antes de todos os testes

* `beforeEach()` Executa mais de uma vez

* `afterAll()` executa um codigo depois que todos os testes executam
