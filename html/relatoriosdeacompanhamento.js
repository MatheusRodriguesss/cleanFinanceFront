function visualizarRelatorio() {
    var mesSelecionado = document.getElementById("mes").value;
    var clientesMaisComprasDiv = document.getElementById("clientesMaisCompras");
    var clientesMaiorValorDiv = document.getElementById("clientesMaiorValor");
    var clientesSemComprasDiv = document.getElementById("clientesSemCompras");
  
    var clientes = [
      { nome: "Cliente A", compras: 10, valorMaximo: 500 },
      { nome: "Cliente B", compras: 5, valorMaximo: 1000 },
      { nome: "Cliente C", compras: 0, valorMaximo: 0 },
      { nome: "Cliente D", compras: 3, valorMaximo: 750 }
    ];
  
    
    clientes.sort((a, b) => a.nome.localeCompare(b.nome));
  
    
    clientesMaisComprasDiv.innerHTML = "";
    clientesMaiorValorDiv.innerHTML = "";
    clientesSemComprasDiv.innerHTML = "";
  
    var clientesMaisComprasHTML = "<h3>Clientes com mais compras:</h3>";
    var clientesMaisCompras = clientes.filter(cliente => cliente.compras > 0);
    clientesMaisCompras.forEach(function(cliente) {
      clientesMaisComprasHTML += "<p>" + cliente.nome + " - " + cliente.compras + " compras</p>";
    });
    clientesMaisComprasDiv.innerHTML = clientesMaisComprasHTML;
  
    var clientesMaiorValorHTML = "<h3>Clientes com compras de maior valor:</h3>";
    var clienteMaiorValor = clientes.reduce((max, cliente) => max.valorMaximo > cliente.valorMaximo ? max : cliente);
    clientesMaiorValorHTML += "<p>" + clienteMaiorValor.nome + " - R$" + clienteMaiorValor.valorMaximo.toFixed(2) + "</p>";
    clientesMaiorValorDiv.innerHTML = clientesMaiorValorHTML;
  
    var clientesSemComprasHTML = "<h3>Clientes sem compras:</h3>";
    var clientesSemCompras = clientes.filter(cliente => cliente.compras === 0);
    clientesSemCompras.forEach(function(cliente) {
      clientesSemComprasHTML += "<p>" + cliente.nome + "</p>";
    });
    clientesSemComprasDiv.innerHTML = clientesSemComprasHTML;
  }
  

