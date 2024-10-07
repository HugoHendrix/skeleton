
// INSERINDO LINKS DO WHATSAPP DINCAMICAMENTE
const numeroPadrao = "+5517996881133";

function aplicarWhatsappLink(selector = '.whatsappLink') {
    const links = document.querySelectorAll(selector);
    
    if (links.length > 0) {
        links.forEach(link => {
            const numero = link.getAttribute('data-numero') || numeroPadrao;
            const mensagem = link.getAttribute('data-mensagem');

            if (numero && mensagem) {
                const encodedMessage = encodeURIComponent(mensagem);
                const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`;
                

                link.href = whatsappLink;
                link.target = "_blank"; 
                link.rel = "noopener noreferrer"; 
            } else {
                console.error("Número ou mensagem não definidos nos atributos data-*.");
            }
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

aplicarWhatsappLink();
