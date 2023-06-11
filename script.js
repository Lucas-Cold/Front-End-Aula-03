window.onload = () => {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        alert("Olá, "+ nome + "! portador do email: " + email + " ,sua mensagem gravada foi: "+ mensagem +"");

    });
};