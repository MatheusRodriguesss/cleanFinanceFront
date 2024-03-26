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
        clienteHtml += "<option value='" + cliente.id +"'>" + cliente.nome +"</option>";
        container.innerHTML += clienteHtml;
    });
}