document.getElementById('telefone').addEventListener('input', function(evt) {
    let phoneNumber = evt.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
  
    if (phoneNumber.length > 11) {
      phoneNumber = phoneNumber.substring(0, 11); // Limita a entrada a 11 caracteres (considerando o DDD e o número)
    }
  
    let formattedPhoneNumber = '';
  
    if (phoneNumber.length > 0) {
      formattedPhoneNumber = '(' + phoneNumber.substring(0, 2); // Adiciona o "(" após os primeiros 2 dígitos
    }
  
    if (phoneNumber.length > 2) {
      formattedPhoneNumber += ') ';
    }
  
    if (phoneNumber.length > 7) {
      formattedPhoneNumber += phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7); // Adiciona o hífen após os próximos 4 dígitos
    } else if (phoneNumber.length > 2) {
      formattedPhoneNumber += phoneNumber.substring(2); // Adiciona os dígitos restantes
    }
  
    evt.target.value = formattedPhoneNumber; // Atualiza o valor do campo de entrada
  });