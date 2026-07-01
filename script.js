 function enviarEmail(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;

        const email = "igormoraes419@gmail.com";

        const assunto = "Contato pelo site";

        const texto = `Olá! Me chamo ${nome}\n\nMensagem: ${mensagem}`;

        const assuntoFormatado = encodeURIComponent(assunto);
        const textoFormatado = encodeURIComponent(texto);

        const url = `mailto:${email}?subject=${assuntoFormatado}&body=${textoFormatado}`;

        window.open(url, "_blank");
    }
