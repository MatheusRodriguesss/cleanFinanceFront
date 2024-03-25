var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/clientes/listaClientes", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var dados = JSON.parse(xhr.responseText);
        exibirDados(dados);
    }
};
xhr.send();


function exibirDados(page) {
    var container = document.getElementById("dados-container");
    container.innerHTML = "";
    
    page.content.forEach(function(cliente) {
        var clienteHtml = "<div class='div-cliente-botoes'><div class='teste-lista-cliente'>";
        clienteHtml += "<p>Nome: " + cliente.nome + "</p>";
        clienteHtml += "<p>Cpf: " + cliente.cpf + "</p>";
        clienteHtml += "<p>Email: " + cliente.email + "</p>";
        clienteHtml += "<p>Telefone: " + cliente.telefone + "</p>";
        clienteHtml += "</div><div><button>Alterar</button><button onclick='excluirCliente(" + cliente.id + ")'>Excluir</button></div></div>";
        container.innerHTML += clienteHtml;
    });
}