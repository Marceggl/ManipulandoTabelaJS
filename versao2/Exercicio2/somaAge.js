$(".button").click(function() {
    uLinha = "<tr><td>Total</td>";
    let soma = 0;
    for (let i = 0; i < $("td").length - 1; i++) {
        soma += parseFloat($("td")[(i + 1)].innerHTML);
        console.log(soma)
        i++
    }
    uLinha += "<td>" + soma + "</td></tr>"
        /* Coloca na tabela */
    $("table").append(uLinha);
    /* Desliga o botão e troca o nome dps de finalizar o processo */
    $(".button").val("Idades Somadas").prop("disabled", true)
})