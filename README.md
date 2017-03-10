# Mamuth Scafold
Iniciador de projetos front-end.

## Instalação

Use `npm install` para instalar as dependências e iniciar o projeto.  

## gulpfile.js

Utilizamos Gulp para automatizar algumas tarefas. Dentro do arquivo `gulpfile.js` há uma variável chamada `options`, e dentro dela a opção `productionMode` setada como `false` por padrão. Ao fazer deploy, certifique-se de alterá-la para `true`, e assim seus arquivos serão injetados já minificados no `index`.  

```js
var options = {
  "productionMode": false // ou true :)
}
```

`gulp watch`: acione este comando no terminal para começar a vigiar pelos arquivos. Em qualquer sinal de alteração nos mesmos, o gulp os recompila e distribui na pasta de acordo com o modo (`productionMode`).
