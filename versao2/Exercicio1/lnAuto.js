let cont = 0;
$(".button").click(function() {
    let entUser = parseInt($(".entrada").val());

    if (isNaN(entUser) == false && entUser > 0 && entUser < 101) {
        let mili = new Date().getMilliseconds();
        let tabela = "<tr><th>Milisegundos</th><th>Valor aleatório</th>"
        for (let i = 0; i < entUser; i++) {
            tabela += "<tr><td>" + mili + "</td><td>" + Math.random().toPrecision(5)
        }
        $("#tabela").html(tabela)
    } else {
        if (cont > 3 && cont < 10) {
            alert("Você não entendeu que o número tem que ser de 1 a 100? \n＼（〇_ｏ）／")
            cont++;
            console.log(cont)
        } else if (cont > 9) {
            alert("Desisto de você \n(╯°□°）╯︵ ┻━┻")
        } else {
            cont++;
            alert("Preencha o campo com um valor de 1 até 100");
            console.log(cont)
        }
    }
})