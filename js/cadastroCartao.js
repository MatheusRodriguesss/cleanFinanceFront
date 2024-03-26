document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
    
    // Captura o valor do limite e o id do cliente selecionado
    var limite = parseFloat(document.getElementById("limite").value);
    var clienteId = parseInt(document.getElementById("dados-container").value);
    
    // Monta o objeto com os dados a serem enviados
    var dados = {
        limite: limite,
        cliente: {
            id: clienteId
        }
    };
    
    // Envia uma requisição POST para o backend
    fetch('http://localhost:8080/cartoes/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro ao cadastrar. Por favor, tente novamente.");
        }
    })
    .catch(function(error) {
        console.error('Erro ao enviar requisição:', error);
    });
});