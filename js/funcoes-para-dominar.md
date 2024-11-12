### 10 Funções JavaScript Essenciais para Iniciantes

Este é um tutorial em português para iniciantes sobre as 10 funções mais úteis e poderosas em JavaScript, que todo desenvolvedor precisa conhecer. Vamos entender o que cada uma delas faz, e como aplicá-las no código!

---

### 1. `querySelector` e `querySelectorAll`
Essas funções ajudam a selecionar elementos do DOM (Document Object Model), que é a estrutura HTML do seu site.

- **`querySelector`**: Retorna o primeiro elemento que corresponde ao seletor CSS especificado.
- **`querySelectorAll`**: Retorna uma lista (`NodeList`) de todos os elementos que correspondem ao grupo de seletores.

#### Exemplo
```javascript
// Seleciona o primeiro elemento com o ID "meuId"
const elemento = document.querySelector('#meuId');

// Seleciona todos os elementos com a classe "minhaClasse"
const elementos = document.querySelectorAll('.minhaClasse');
```

---

### 2. `addEventListener`
Essa função permite "escutar" eventos em elementos do DOM, como cliques ou rolagem da página, e executar uma função quando o evento ocorre.

#### Exemplo
```javascript
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', function() {
    // Esta função é executada quando o botão é clicado
    console.log('Botão clicado!');
});
```

---

### 3. `fetch`
O `fetch` é utilizado para fazer requisições de rede, como buscar dados de uma API. Ele retorna uma `Promise`, que lida com a resposta da requisição de maneira assíncrona.

#### Exemplo
```javascript
fetch('https://api.exemplo.com/dados')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error('Erro:', erro));
```

---

### 4. `map`
A função `map` cria um novo array aplicando uma função a cada elemento de um array existente. Isso é útil quando você quer modificar ou transformar dados em um array.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2); // [2, 4, 6, 8]
```

---

### 5. `filter`
`filter` cria um novo array com todos os elementos que passam em um teste específico. Ótimo para filtrar itens com base em condições.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(num => num % 2 === 0); // [2, 4]
```

---

### 6. `reduce`
A função `reduce` usa uma função de callback para “reduzir” um array a um único valor, aplicando a função de forma acumulativa em cada elemento.

#### Exemplo
```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); // 10
```

---

### 7. `setTimeout` e `setInterval`
Essas funções controlam o tempo de execução de uma função.

- **`setTimeout`**: Executa uma função depois de um determinado tempo (em milissegundos).
- **`setInterval`**: Chama uma função repetidamente a cada intervalo de tempo especificado.

#### Exemplo
```javascript
// Executa uma vez após 1 segundo
setTimeout(() => {
    console.log('Função atrasada executada');
}, 1000);

// Executa repetidamente a cada segundo
setInterval(() => {
    console.log('Função executada a cada segundo');
}, 1000);
```

---

### 8. `JSON.parse` e `JSON.stringify`
Essas funções ajudam a converter entre strings JSON e objetos JavaScript.

- **`JSON.parse`**: Converte uma string JSON em um objeto JavaScript.
- **`JSON.stringify`**: Converte um objeto JavaScript em uma string JSON.

#### Exemplo
```javascript
const jsonString = '{"chave": "valor"}';
const objeto = JSON.parse(jsonString); // Converte para objeto

const obj = { chave: 'valor' };
const jsonStr = JSON.stringify(obj); // Converte para string JSON
```

---

### 9. `Array.isArray`
Essa função verifica se o valor fornecido é um array. Retorna `true` se for, e `false` caso contrário.

#### Exemplo
```javascript
const arr = [1, 2, 3];
if (Array.isArray(arr)) {
    console.log('É um array');
}
```

---

### 10. `Promise`
As `Promises` representam uma operação assíncrona que pode ser concluída com sucesso ou falhar. Permitem que seu código continue enquanto a operação não é finalizada.

#### Exemplo
```javascript
const buscarDados = () => {
    return new Promise((resolve, reject) => {
        const sucesso = true;
        
        if (sucesso) {
            resolve('Dados buscados com sucesso');
        } else {
            reject('Erro ao buscar dados');
        }
    });
};

buscarDados()
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));
```

---
