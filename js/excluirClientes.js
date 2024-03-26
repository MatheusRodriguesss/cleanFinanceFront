function excluirCliente(id) {
    fetch("http://localhost:8080/clientes/" + id, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            location.reload();
            alert("O cliente está sendo excluído!")
        } else {
            console.error("Erro ao excluir cliente.");
            alert("Erro ao excluir cliente.");
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
        alert("Erro na requisição.");
    });
}