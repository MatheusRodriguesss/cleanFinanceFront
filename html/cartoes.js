function abrirModal(numeroCartao, limite, validade, cliente, cpf) {
    document.getElementById("numeroCartao").textContent = numeroCartao;
    document.getElementById("limite").textContent = limite;
    document.getElementById("validade").textContent = validade;
    document.getElementById("cliente").textContent = cliente;
    document.getElementById("cpf").textContent = cpf;
    document.getElementById("modal").style.display = "block";
  }
  
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function alterarLimite() {
    var novoLimite = document.getElementById("novoLimite").value;
    console.log("Novo limite:", novoLimite);
    fecharModal();
  }
  