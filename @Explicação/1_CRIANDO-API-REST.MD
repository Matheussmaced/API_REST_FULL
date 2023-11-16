_Instalação do TypeScript_

- Primeiramente, intalamos `npm init -y`
- Apos isso, instalamos o TypeScript `npm i -D typescript`
- E depois instamos o `tsconfig.json` dessa forma: `npx tsc --init`
- Dentro desse arquivo, modificamos o `target` para `es2020`

_Convertendo o codigo para TypeScript_

- Convertemos usando o seguinte comando : `npx tsc src/nome_do_arquivo.ts`
- Nisso, irá criar um novo arquivo convertendo ele para .js
- E ai é só executar o arquivo com o `node`
- Necessário também a instalação do pacote `npm i -D @types/node`

- Para não ficar sempre convertendo o codigo para executar, utilizaremos a ferramente `npm i tsx -D`

- Agora basta executar `npx tsx src/server.ts`
- Para converter para .js deve usar `npx tsc src/server.ts`
- Mas só utilizaremos para desenvolvimento, para produção utilizaremos a conversão tradicional

- No `scripts` podemos escrever `"dev": "tsx watch src/server.ts"` e ai é só escrever `npm run dev`

_Instalação e executação fastify_

- Para instalar o mini framework `fastify` devemos usar o seguinte comando: `npm i fastify`

- Apos a instalação, para criarmos uma rota com o metodo `GET` `http://localhost:3333/hello` devemos seguir o passo que está no arquivo `src/server.ts`

- E para a aplicação ouvir uma porta, devemos escrever no final do codigo:
  `app.listen({
  port: 3333
}).then()`

_Instalar ESLint_

- `npm i eslint @rocketseat/eslint-config -D `
- Cria um arquivo .eslintrc.json e coloca dentro `{
  "extends": [
    "@rocketseat/eslint-config/node"
  ]
}`

* nisso criamos um arquivo chamado `.prettierrc.json` e executamos o seguinte comando `npx prettier --write .`
