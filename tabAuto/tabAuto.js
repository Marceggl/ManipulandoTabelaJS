const proccess = document.getElementById("proccess");
const tabela = document.getElementById("tab");

function createTable() {
    //caputar input
    let qtdLinha = document.getElementById("qtdLinha").value;
    let qtdColumn = document.getElementById("qtdColumn").value;
    if (qtdColumn == "" || qtdLinha == "") {
        alert("Por favor preencha os campos!!!")
    }
    let conteudo = "";
    //abre a tag da tabela
    conteudo += "<table>";
    //"for" para quantidade de linha
    for (i = 1; i <= qtdLinha; i++) {
        //Coloca as linhas
        conteudo += "<tr>";
        //"for" para as colunas
        for (j = 1; j <= qtdColumn; j++) {
            //Adiciona a coluna inserindo suas coordenadas
            if (j % 2 == 0) {
                conteudo += "<td style='background-color:green;'>Linha: " + i + " - Coluna:" + j + "</td>";
            } else {
                conteudo += "<td style='background-color: yellow;'>Linha: " + i + " - Coluna:" + j + "</td>";
            }
        }
        //Fecha a tag linha
        conteudo += "</tr>";
    }
    //fecha a tag tabela
    conteudo += "</table>";
    //Insere todo o processamento como innerHTML
    tabela.innerHTML = conteudo;
}

proccess.addEventListener("click", createTable);