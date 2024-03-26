function visualizarGastos() {
    var cartaoSelecionado = document.getElementById("cartao").value;
    var mesSelecionado = document.getElementById("mes").value;
    var resultadoDiv = document.getElementById("resultado");

    var gastosPorCategoria = [
      { categoria: "Alimentação", valor: 250 },
      { categoria: "Transporte", valor: 100 },
      { categoria: "Lazer", valor: 150 },
    ];
  
    if (gastosPorCategoria.length > 0) {
      gastosPorCategoria.sort((a, b) => a.categoria.localeCompare(b.categoria));
  
     
      var tableHTML = "<table><tr><th>Categoria</th><th>Valor Gasto</th></tr>";
      gastosPorCategoria.forEach(function(gasto) {
        tableHTML += "<tr><td>" + gasto.categoria + "</td><td>R$" + gasto.valor.toFixed(2) + "</td></tr>";
      });
      tableHTML += "</table>";
      var totalGasto = gastosPorCategoria.reduce((total, gasto) => total + gasto.valor, 0);
      tableHTML += "<p>Total Gasto: R$" + totalGasto.toFixed(2) + "</p>";
  
      resultadoDiv.innerHTML = tableHTML;
    } else {
      resultadoDiv.innerHTML = "<p>Nenhuma compra realizada no período.</p>";
    }
  }
  