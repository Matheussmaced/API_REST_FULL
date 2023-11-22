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
