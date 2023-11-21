_PLUGINS_

- Nada mais são uma forma da gente separar pequenos pedacinhos da nossa aplicação em mais arquivos

- Consigo separar rotas como demostrado nesse commit

- No plugin criado no arquivo `server.ts` se caso todas as rotas tiverem o mesmo caminho, posso passar um segundo parametro contendo `{prefix:}` todas as rotas que começarem com o prefix que colocaremos vão cair no plugin `'/'` definido no arquivo `transactions.ts`

- `.body` é de onde vem as informações que servem para criar ou editar algum recurso, caso estou criando uma transação, é dentro do `body` que vai vir os dados dessa transação que estou querendo criar, geralmente dados preenchidos atraves de um formulario

_Explicação_

- nesse trecho do codigo desse commit `const body = createTransactionSchema.parse(req.body)` estou validando os dados do meu `req.body` que são os dados vindo da requisição para ver se ele batem com o meu schema que defini a cima e se tudo bate, o codigo continuará executado


*Cookies*

* Formas de manter contexto entre requisições
* Serve para indentificar o usuario

* OBS: para se trabalhar com cookies no fastify, é necessário instalar `npm i @fastify/cookie`

* `if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
      })
    }`
Caso não tenha um sessionId, ele irá criar um e irá salvar no cookie com o `reply.` com uma informação chamada `sessionId` com o valor do id que acabou de criar

* O cookie possui algumas configurações onde as principais são:

* `path` onde quais endereço esse cookie estará disponivel (se colocarmos `'/'` quero dizer que qualquer rota do meu backend pode acessar esse cookie)

* `maxAge` onde será a data limite de expiração do cookie onde a informação é passada em milesegundos
