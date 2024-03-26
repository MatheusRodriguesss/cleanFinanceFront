var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/cartoes/listaCartoes", true);
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
    
    page.content.forEach(function(cartao) {
        var cartaoHtml = "";
        cartaoHtml += "<tr><td>Número: " + cartao.numero +"</td>";
        cartaoHtml += "<td>Cliente: " + cartao.cliente +"</td>";
        cartaoHtml += "<td>Limite: " + cartao.limite +"</td>";
        cartaoHtml += "<td>CVV: " + cartao.cvv +"</td>";
        cartaoHtml += "<td>Validade: " + cartao.validade +"</td>";
        cartaoHtml += "<td><button class='limite'>Alterar Limite</button><button class='fatura'>Ver Fatura</button><button class='ativar'>Ativar/Desativar</button></td></tr>";
        container.innerHTML += cartaoHtml;
    });
}