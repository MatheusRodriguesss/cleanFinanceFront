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
        var clienteHtml = "";
        clienteHtml += "<tr><td>Nome: " + cliente.nome +"</td>";
        clienteHtml += "<td>Cpf: " + cliente.cpf +"</td>";
        clienteHtml += "<td>Email: " + cliente.email +"</td>";
        clienteHtml += "<td>Telefone: " + cliente.telefone +"</td>";
        clienteHtml += "<td><button>Alterar</button><button onclick='excluirCliente("+ cliente.id +")'>Excluir</button></td></tr>";
        container.innerHTML += clienteHtml;
    });
}