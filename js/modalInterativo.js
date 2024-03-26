function criarModal(cliente) {
    // Criar elementos HTML para o modal
    var modal = document.createElement('div');
    modal.classList.add('modal');

    var modalConteudo = document.createElement('div');
    modalConteudo.classList.add('modal-conteudo');

    var closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    var formulario = document.createElement('form');
    formulario.id = 'formularioAtualizarCliente';

    // Adicionar campos do formulário para atualizar os detalhes do cliente
    var labelNome = document.createElement('label');
    labelNome.textContent = 'Nome:';
    var inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.value = cliente.nome;
    inputNome.required = true;

    var labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email:';
    var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.value = cliente.email;
    inputEmail.required = true;
var labelTelefone = document.createElement('label');
    labelTelefone.textContent = 'Telefone:';
    var inputTelefone = document.createElement('input');
    inputTelefone.type = 'tel';
    inputTelefone.value = cliente.telefone;
    inputTelefone.required = true;

    var labelCPF = document.createElement('label');
    labelCPF.textContent = 'CPF:';
    var inputCPF = document.createElement('input');
    inputCPF.type = 'text';
    inputCPF.value = cliente.cpf;
    inputCPF.required = true;

    var botaoAtualizar = document.createElement('button');
    botaoAtualizar.type = 'submit';
    botaoAtualizar.textContent = 'Atualizar Cliente';

    // Adicionar elementos ao formulário
    formulario.appendChild(labelNome);
    formulario.appendChild(inputNome);
    formulario.appendChild(labelEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(labelTelefone);
    formulario.appendChild(inputTelefone);
    formulario.appendChild(labelCPF);
    formulario.appendChild(inputCPF);
    formulario.appendChild(botaoAtualizar);
// Adicionar elementos ao conteúdo do modal
    modalConteudo.appendChild(closeButton);
    modalConteudo.appendChild(formulario);

    modal.appendChild(modalConteudo);

    // Adicionar modal à página
    document.body.appendChild(modal);

    // Exibir o modal
    modal.style.display = 'block';

    // Lidar com o envio do formulário
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar envio padrão do formulário

        // Obter valores do formulário
        var novoNome = inputNome.value;
        var novoEmail = inputEmail.value;
        var novoTelefone = inputTelefone.value;
        var novoCPF = inputCPF.value;

        // Aqui você pode chamar a função de atualização do cliente, passando os novos detalhes
        // Certifique-se de implementar a lógica de atualização do cliente adequadamente

        // Fechar o modal após a atualização
        modal.style.display = 'none';
    });
}

// Exemplo de uso:
// Suponha que você tenha uma lista de clientes e deseje exibir um modal para atualizar o cliente quando um evento ocorrer, por exemplo, um clique em um botão.
// Aqui está um exemplo de como você pode usar a função criarModalAtualizarCliente:

// Suponha que 'clientes' seja um array contendo os dados dos clientes
var clienteExemplo = {
    nome: 'João',
    email: 'joao@example.com',
    telefone: '123456789',
    cpf: '123.456.789-01'
};

// Chamar a função para criar e exibir o modal para atualizar o cliente
criarModalAtualizarCliente(clienteExemplo);