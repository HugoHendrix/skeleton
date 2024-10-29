
# Gerador Dinâmico de Links do WhatsApp

Este código JavaScript gera dinamicamente links do WhatsApp para qualquer elemento HTML que inclua atributos `data-*` específicos. Ele permite tanto o uso de números individuais de WhatsApp quanto a definição de um número padrão, oferecendo flexibilidade para diferentes cenários.

## Funcionalidades

- Gera links do WhatsApp dinamicamente com base no número e mensagem definidos no elemento HTML.
- Permite o uso de um **número de WhatsApp padrão** quando nenhum número é especificado.
- Possibilita a substituição do número padrão definindo um número personalizado diretamente no HTML via `data-* attributes`.
- Melhora a acessibilidade e segurança com `target="_blank"` e `rel="noopener noreferrer"` aplicados aos links.

## Como usar

### Configuração HTML

No seu HTML, adicione a classe `.whatsappLink` a qualquer tag âncora (`<a>`) onde deseja que o link do WhatsApp seja gerado dinamicamente.

Você pode usar os seguintes atributos `data-*`:
- `data-numero` (opcional): Especifica o número de WhatsApp a ser usado. Se este atributo for omitido, um número padrão será utilizado.
- `data-mensagem` (obrigatório): Define a mensagem que será pré-preenchida ao clicar no link do WhatsApp.

#### Exemplo

```html
<!-- Exemplo de link com número de WhatsApp personalizado -->
<a class="whatsappLink" data-numero="+5517996781133" data-mensagem="Olá, gostaria de saber mais sobre os seus serviços.">
    Contato via WhatsApp - Suporte
</a>

<!-- Exemplo de link usando o número de WhatsApp padrão definido no JavaScript -->
<a class="whatsappLink" data-mensagem="Estou interessado nos seus produtos.">
    Contato via WhatsApp - Comercial
</a>
```

### Código JavaScript


```js
// Número padrão do WhatsApp
const numeroPadrao = "+5517998881133";

// Função para aplicar links do WhatsApp dinamicamente com base nos atributos data-*
function aplicarWhatsappLink(selector = '.whatsappLink') {
    const links = document.querySelectorAll(selector);
    
    if (links.length > 0) {
        links.forEach(link => {
            // Verifica se um número específico foi definido no atributo data, senão usa o padrão
            const numero = link.getAttribute('data-numero') || numeroPadrao;
            const mensagem = link.getAttribute('data-mensagem');

            if (numero && mensagem) {
                const encodedMessage = encodeURIComponent(mensagem);
                const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`;
                
                // Aplica o link do WhatsApp no href e garante acessibilidade
                link.href = whatsappLink;
                link.target = "_blank";  // Abre em uma nova aba
                link.rel = "noopener noreferrer";  // Melhora segurança e performance
            } else {
                console.error("Número ou mensagem não definidos nos atributos data-*.");
            }
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

// Chama a função para aplicar os links do WhatsApp
aplicarWhatsappLink();
```

### Como Personalizar

1. **Definir Número Padrão do WhatsApp**:  
   No arquivo JavaScript, atualize a variável `numeroPadrao` com o número de WhatsApp que deseja usar como padrão.
   
   ```js
   const numeroPadrao = "+5517997881133"; // Altere para o número padrão desejado
   ```

2. **Personalizar Links**:  
   Você pode personalizar o número de WhatsApp e a mensagem para cada link individualmente definindo os atributos `data-numero` e `data-mensagem` no HTML.

3. **Mensagem Padrão**:  
   Todos os links **devem** ter o atributo `data-mensagem`, pois ele define a mensagem que será enviada pelo WhatsApp.

### Tratamento de Erros

- Se um link não tiver ambos `data-numero` ou `numeroPadrao` e `data-mensagem`, um erro será registrado no console.

## Compatibilidade com Navegadores

Este script é compatível com todos os navegadores modernos que suportam JavaScript. Ele também é otimizado para dispositivos móveis, permitindo uma fácil integração com o WhatsApp em várias plataformas.

---

# Outros formas de usar links dinâmicos

### 1. **Links de Redes Sociais**
   Usar `data-* attributes` para gerar dinamicamente links para diferentes perfis de redes sociais pode facilitar a manutenção do site, especialmente se o cliente quiser mudar o link de uma rede social. Além disso, você pode ter um padrão para o link, como o nome de usuário, e alterá-lo de forma fácil.

   **Exemplo de HTML:**
   ```html
   <a class="socialLink" data-rede="instagram" data-usuario="seuUsuarioInstagram">
       Instagram
   </a>
   <a class="socialLink" data-rede="facebook" data-usuario="seuUsuarioFacebook">
       Facebook
   </a>
   ```

   **Exemplo de JavaScript:**
   ```js
   function aplicarSocialLinks(selector = '.socialLink') {
       const redesBaseUrl = {
           instagram: "https://www.instagram.com/",
           facebook: "https://www.facebook.com/",
           twitter: "https://twitter.com/"
       };
       
       const links = document.querySelectorAll(selector);
       links.forEach(link => {
           const rede = link.getAttribute('data-rede');
           const usuario = link.getAttribute('data-usuario');
           
           if (rede && usuario && redesBaseUrl[rede]) {
               link.href = `${redesBaseUrl[rede]}${usuario}`;
               link.target = "_blank";
               link.rel = "noopener noreferrer";
           } else {
               console.error("Rede ou usuário não definidos corretamente.");
           }
       });
   }

   aplicarSocialLinks();
   ```

### 2. **Links de E-mail Dinâmicos**
   Para links de e-mail, você pode usar atributos `data-*` para gerar automaticamente o link `mailto:` com um assunto e corpo da mensagem pré-preenchidos, o que é útil para formulários de contato ou links de suporte.

   **Exemplo de HTML:**
   ```html
   <a class="emailLink" data-email="contato@empresa.com" data-assunto="Suporte" data-mensagem="Olá, preciso de ajuda com...">
       Enviar E-mail
   </a>
   ```

   **Exemplo de JavaScript:**
   ```js
   function aplicarEmailLinks(selector = '.emailLink') {
       const links = document.querySelectorAll(selector);
       links.forEach(link => {
           const email = link.getAttribute('data-email');
           const assunto = link.getAttribute('data-assunto');
           const mensagem = link.getAttribute('data-mensagem');

           if (email && assunto && mensagem) {
               const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
               link.href = mailtoLink;
           } else {
               console.error("E-mail, assunto ou mensagem não definidos corretamente.");
           }
       });
   }

   aplicarEmailLinks();
   ```

### 3. **Botões de Ação Dinâmicos (Call to Action)**
   Em um site institucional, botões de ação como "Solicitar Orçamento", "Ver Catálogo", ou "Agendar uma Reunião" podem ser criados dinamicamente com base no tipo de serviço ou produto oferecido. Usar `data-*` attributes permite uma maior flexibilidade para ajustar esses links sem modificar o JavaScript.

   **Exemplo de HTML:**
   ```html
   <a class="ctaLink" data-url="/servicos/consultoria" data-texto="Solicitar Consultoria">
       Solicitar
   </a>
   ```

   **Exemplo de JavaScript:**
   ```js
   function aplicarCtaLinks(selector = '.ctaLink') {
       const links = document.querySelectorAll(selector);
       links.forEach(link => {
           const url = link.getAttribute('data-url');
           const texto = link.getAttribute('data-texto');
           
           if (url && texto) {
               link.href = url;
               link.textContent = texto;
           } else {
               console.error("URL ou texto não definidos.");
           }
       });
   }

   aplicarCtaLinks();
   ```

### Benefícios da Abordagem

1. **Manutenção Simples**: Atualizar links e informações diretamente no HTML, sem necessidade de alterar o JavaScript, facilita a manutenção do site.
2. **Reutilização de Código**: Você pode usar a mesma lógica para diferentes seções do site, como redes sociais, contato, ou qualquer outro link dinâmico, tornando o código mais limpo e reutilizável.
3. **Escalabilidade**: À medida que o site cresce, você pode adicionar mais tipos de links sem precisar modificar a lógica central.
4. **Personalização**: Dá ao cliente ou desenvolvedor mais controle sobre o conteúdo sem precisar alterar diretamente o JavaScript.

Essa flexibilidade e organização melhoram muito o desenvolvimento de sites institucionais, permitindo uma gestão mais eficiente do conteúdo dinâmico.