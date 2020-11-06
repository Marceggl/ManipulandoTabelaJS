$(".gTable").click(function() {
    let ent = document.querySelectorAll(".entU");
    if (ent[0].value != "" && ent[1].value != "") {
        let conteudo = "<table class='tabEx3'>";
        for (let i = 0; i <= parseFloat(ent[1].value) - 1; i++) {
            conteudo += "<tr>";
            for (let j = 0; j <= parseFloat(ent[0].value) - 1; j++) {
                if (j % 2 == 0) {
                    conteudo += "<td style='background-color:yellow;'>Linha: " + (i + 1) + " - Coluna:" + (j + 1) + "</td>";
                } else {
                    conteudo += "<td style='background-color:green;'>Linha: " + (i + 1) + " - Coluna:" + (j + 1) + "</td>";
                }
            }
            conteudo += "</tr>";
        }
        conteudo += "</table>";
        $(".tabela").html(conteudo)
    } else {
        alert("Preencha os campos")
    }
})