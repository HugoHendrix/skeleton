## EXIBIR DADOS DINAMICAMENTE

```JavaScript
//EXIBIR TELEFONE/WHATSAPP
const telefone = "(17) 99116-8475";
const telefoneLink = document.querySelector('#telefone1 a'); // Seleciona a tag <a> dentro do <p>
telefoneLink.textContent = telefone; // Insere o número dentro do link

// GERANDO LINK WHATSAPP DINÂMICO
const numeroPadrao = "+5517991168475";
function aplicarWhatsappLink(selector = '.whatsappLink') {
    const links = document.querySelectorAll(selector);
    if (links.length > 0) {
        links.forEach(link => {
            const numero = link.getAttribute('data-numero') || numeroPadrao;
            const mensagem = link.getAttribute('data-mensagem') || "Olá, gostaria de mais informações."; // Mensagem padrão

            const encodedMessage = encodeURIComponent(mensagem);
            const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`;

            link.href = whatsappLink;  // Define o link do WhatsApp
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

aplicarWhatsappLink();
```

# EXIBIR E-MAIL DINAMICAMENTE

```JavaScript

const emailLink = document.querySelector('#email1 a'); // Seleciona a tag <a> dentro do <p>

function aplicarEmailLink(selector = '.emailLink') {
    const links = document.querySelectorAll(selector);
    if (links.length > 0) {
        links.forEach(link => {
            const email = link.getAttribute('data-email') || "contato@empresa.com"; // E-mail padrão
            const emailHref = `mailto:${email}`;
            link.href = emailHref;
            link.textContent = email;
            link.target = "_blank";
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

aplicarEmailLink();
```

### HTML

```HTML
 <p id="telefone1">
    <a href="#" class="whatsappLink"></a>
</p>
<p id="email1">
    <a href="#" class="emailLink" data-email></a>
</p>
```
---
