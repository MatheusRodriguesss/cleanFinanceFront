document.getElementById('cpf').addEventListener('input', function(evt) {
    let cpf = evt.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
  
    // Limita a entrada a 11 caracteres (considerando apenas os dígitos do CPF)
    cpf = cpf.substring(0, 11);
  
    // Formata o CPF conforme o padrão XXX.XXX.XXX-XX
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(match, p1, p2, p3, p4) {
        let cpfFormatado = `${p1}.${p2}.${p3}-${p4}`; // Formata o CPF com pontos e hífen
        return cpfFormatado;
    });
  
    evt.target.value = cpf; // Atualiza o valor do campo de entrada
  });