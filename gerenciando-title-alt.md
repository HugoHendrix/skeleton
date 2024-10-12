
```md
# Gerenciamento Centralizado de `alt` e `title` de Imagens Usando JavaScript

Este guia explica como gerenciar de forma eficiente os atributos `alt` e `title` de várias imagens em uma página usando JavaScript, de forma que a alteração do nome da marca seja feita em um único local e aplicada a todas as imagens automaticamente.

## Passo 1: Estrutura HTML com `data-brand`

Adicione um `data-attribute` personalizado (`data-brand`) às imagens que você quer gerenciar dinamicamente.

```html
<a href="/index.html">
    <img src="img/logo1.jpg" class="nav-logo" data-brand="Canto Arte Mosaico" alt="" title="">
</a>

<a href="/another-page.html">
    <img src="img/logo2.jpg" class="nav-logo" data-brand="Canto Arte Mosaico" alt="" title="">
</a>
```

## Passo 2: JavaScript para Gerenciamento Centralizado

Crie uma variável centralizada para o nome da marca. Quando precisar alterar o nome, você só altera essa variável e o novo valor será aplicado a todas as imagens.

### Exemplo com uma única marca

```javascript
// Define a marca em um único local
const brandName = "Canto Arte Mosaico";

// Seleciona todas as imagens que possuem o atributo data-brand
const images = document.querySelectorAll('img[data-brand]');

// Percorre cada imagem e aplica os valores dinâmicos
images.forEach(image => {
    // Define o alt e o title dinamicamente com base na variável centralizada
    image.setAttribute('alt', brandName);
    image.setAttribute('title', brandName);
});
```

### Explicação:
- **`brandName`**: Variável que armazena o nome da marca e é usada para preencher o `alt` e `title` de todas as imagens.
- **`querySelectorAll('img[data-brand]')`**: Seleciona todas as imagens que possuem o atributo `data-brand`.
- **`forEach`**: Itera sobre todas as imagens para aplicar os valores dinâmicos de `alt` e `title`.

### Vantagens:
1. **Facilidade de Manutenção**: Para alterar o nome da marca, basta modificar o valor da variável `brandName` em um único lugar.
2. **Escalabilidade**: Qualquer nova imagem adicionada com o `data-brand` será automaticamente gerenciada.

## Passo 3: Gerenciamento de Múltiplas Marcas

Se você tiver múltiplas marcas, use um objeto JavaScript para centralizar o gerenciamento.

### Exemplo com múltiplas marcas

```javascript
// Define um objeto para diferentes marcas
const brands = {
    "logo1.jpg": "Canto Arte Mosaico",
    "logo2.jpg": "Outra Empresa"
};

// Seleciona todas as imagens com data-brand
const images = document.querySelectorAll('img[data-brand]');

// Percorre cada imagem e aplica os valores dinamicamente
images.forEach(image => {
    const imgSrc = image.getAttribute('src').split('/').pop(); // Obtém o nome do arquivo de imagem
    const brandName = brands[imgSrc]; // Busca o nome da marca no objeto

    // Define alt e title baseados na marca correspondente
    if (brandName) {
        image.setAttribute('alt', brandName);
        image.setAttribute('title', brandName);
    }
});
```

### Explicação:
- **`brands`**: Um objeto que mapeia o nome do arquivo de imagem ao nome da marca.
- **Gerenciamento Centralizado**: Se precisar alterar uma marca, basta atualizar o objeto `brands`.
- **Suporte para Múltiplas Marcas**: Esse código é flexível para trabalhar com várias marcas, aplicando o nome correto a cada imagem.


## Conclusão

Esse método permite gerenciar de forma centralizada os atributos `alt` e `title` de várias imagens em sua página, economizando tempo e facilitando a manutenção do código, especialmente em projetos com muitas imagens ou múltiplas marcas.
```
