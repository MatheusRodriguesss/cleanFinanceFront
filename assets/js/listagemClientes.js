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
        var clienteHtml = "<table><thead><tr><th>CPF</th><th>Nome</th><th>Email</th><th>Telefone</th><th class='acoes'>Ações</th></tr></thead>";
        clienteHtml += "<tbody><tr><td>Nome: " + cliente.nome +"</td>";
        clienteHtml += "<td>Cpf: " + cliente.cpf +"</td>";
        clienteHtml += "<td>Email: " + cliente.email +"</td>";
        clienteHtml += "<td>Telefone: " + cliente.telefone +"</td>";
        clienteHtml += "<td><button>Alterar</button><button>Excluir</button></td></tr></tbody></table>";
        container.innerHTML += clienteHtml;
    });
}