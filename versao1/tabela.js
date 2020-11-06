const btn = document.getElementById("btn");

//Veridicar se a entrada está vazia
function verif(x) {
    let txt = "";
    if (x == "") {
        txt = "Preencha o campo !!!";
    }
    return txt;

}

function novaLinha() {
    //capturando o input
    const entUser = document.getElementById("inp").value;
    const verEnt = document.getElementById("resNome");
    //verifica se ta vazio
    verEnt.innerHTML = verif(entUser);

    //pegando milisegundos
    let datetime = new Date()
    let milisec = datetime.getMilliseconds();
    //Achar a tabela no HTML
    var tabela = document.getElementById("tabela");
    //verificar a quantidade de linha
    var nLinhas = tabela.rows.length;

    //"for" fazendo a quantidade de linhas digitadas pelo usuário
    for (var i = 0; i < entUser; i++) {
        //Adiciona a linha
        var linha = tabela.insertRow(nLinhas);
        //Adiciona as colunas
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        celula1.innerHTML = milisec;
        celula2.innerHTML = Math.random().toPrecision(5);
    }
}


btn.addEventListener("click", novaLinha);