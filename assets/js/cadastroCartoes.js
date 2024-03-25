document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário de atualizar a página

    // Obter os dados do formulário
    const formData = {
        limite: document.getElementById("myForm").elements["limite"].value,
        cpf: document.getElementById("myForm").elements["cpf"].value,
    };

    // Enviar a requisição POST usando fetch() com os dados em formato JSON
    fetch("http://localhost:8080/cartoes/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na requisição.");
        }
        return response.json(); // Se o backend retornar JSON
    })
    .then(data => {
        // Manipular a resposta do backend, se necessário
        console.log("Resposta do servidor:", data);
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
});