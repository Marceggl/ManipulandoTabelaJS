function reload() {
    document.location.reload();
}
const proccess = document.getElementById("btn");

proccess.addEventListener("click", function() {
    //localizar tabela
    const tabela = document.getElementById("tabela");
    //Pegar os td(localização da coluna)
    const column = document.getElementsByTagName("td");
    //Qtd de linha na tabela
    var nLinha = tabela.rows.length;
    //Adicionar linha
    var linha = tabela.insertRow(nLinha);
    //Adicionar colunas
    let celula1 = linha.insertCell(0);
    let celula2 = linha.insertCell(1);

    //Inserir o texto nas colunas
    celula1.innerHTML = "Total";
    celula2.innerHTML = parseInt(column[1].innerText) + parseInt(column[3].innerText) + parseInt(column[5].innerText);

    proccess.classList.add("disable");
    proccess.classList.remove("btn")
        //Desabilita o botão depois de cliclar
    proccess.disabled = true;
});