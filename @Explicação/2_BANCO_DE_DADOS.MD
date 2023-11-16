_SQLite_

- Iremos utilizar `SQLite` pois é a melhor opção para aprendizado

_Estrategias de conexão com banco de dados_

- Todas as linguagens, frameworks, elas possuem formas diferentes de se comunicar com o banco de dados, as tres formas mais famosas são:

- `drivers nativos` São ferramentas, bibliotecas, de baixo nivel, que permite a comunicação com banco de dados bem não abstrata. Ex: `mysql2` iremos escrever o codigo bem 'cru' escrevendo a query como realmente quero executar

- `query builder` São formas de evitar que aprenda muito `sql` e poder focar mais na linguagem que estamos trabalhando, ex: `knexjs`

- `orm`

_Utilizaremos knexjs_

- para instalar, devemos : `npm i knex sqlite3`
- Criaremos um arquivo chamado `database.ts`

_Migrations_

- Migrations são historicos de todas as mudanças feitas no banco de dados
- Bem parecido com o `git` conseguimos trabalhar com um time, onde varias pessoas podem modificar a mesma tabela remover/adicionar campos e mesmo assim conseguir ter a facilidade em ter o banco de dados atualizado entre todas as contas

- No database, criaremos uma constante e passamos as configurações que estão no `knex` para essa constante e importamos para o novo arquivo criado com o nome de `knexfile.ts`

- Para criar uma migration, é necessario o comando ` npx knex migrate:make create-documents` documents é o nome da tabela

- Para evitar erros relacionado ao typescript, criaremos um script: `"knex": "node --loader tsx ./node-module/.bin/knex"` e ai rodamos ao inves do `"knex": ""knex": "ts-node ./node_modules/knex/bin/cli.js"` instalamos `npm i --save-dev ts-node` e escrevemos `npm run knex -- -h`

- Agora para criar a migrate, basta escrever `npm run knex -- migrate:make create-documents`

_Migrations_

- A função `Up` significa oque que essa `migration` oque que ela vai fazer no banco de dados, criar uma tabela? vai adicionar um campo em uma tabela existente? vai remover uma tabela?

- A função `Down` é o metodo que basicamente descreve algum problema, o `Down` irá fazer tudo que for contrário do metodo `Up`, se no `Up` eu crio uma tabela, no `Down` irei remover uma tabela

- Exemplo de criação de uma tabela no arquivo `create-transactions` em migration

- para criar a tabela, iremos escrever no terminal `npm run knex -- migrate:latest`

- _Atenção_ Apos a migration ser enviada para a produção ela não poderá ser mais editada! Caso tenha errado algo na `migration` é preciso criar outra `migration` para modificar aquilo

- Caso não tenha enviado para produção, poderá sim editar a migration dessa forma: `npm run knex -- migrate:rollback` e isso irá desfazer a `migration`

- Agora com as migrations criadas, ela serviram como a key para as informações inseridos, se la na `migration` coloquei `table.text('title')` la no server passarei a informação `title` como titulo do objeto criado

- Ex de ligação do db ao server

```
  knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*') // returning all informations
```

_Variaveis de ambiente_

- Informações que podem ser diferentes a cada ambiente que nossa aplicação está executando. OBS: `ambientes` são momentos da nossa aplicação, ambiente de desenvolvimento, ambiente de produção (aplicação no ar), ambiente de teste (aplicação executando testes automatizados), ambiente de stage (preview)

- Criamos um arquivo `.env` onde ficará as variaveis ambiente

- Dentro do arquivo, criamos as variaveis ambiente, como no exemplo desse codigo

- Apos isso, devemos ler esse arquivo utilizando `node` instalando `npm i dotenv`

- No arquivo que queremos ler as variaveis ambiente, devemos importar `import 'dotenv/config'`

_Tratando erros com zod_

- instalação do zod `npm i zod`

- `z` = criar um `schema`

- `schema` formato de dado, temos que colocar dentro da variavel do `schema` qual que é o formato que eu vou receber de dados das nossas variaveis ambiente

- Defino a variavel como no exemplo do arquivo `index.ts` dentro da pasta `env`

- Se ela pudesse ter um valor vazio, escreveria `.nullable()`

- A key `NODE_ENV` como descrito no arquivo `index.ts` serve para informar qual ambiente estamos executando a aplicação `development`, `test` ou `production`

_RESUMO_

- Variáveis que só existem em determinado ambiente, como o desenvolvimento ou produção

- Vantagem de usar um query builder ao inves de um driver nativo é ser mais fácil de usar e oferece uma API mais intuitiva

- Migrations são scripts que modificam o esquema do banco de dados

-
