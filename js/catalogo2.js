function buscar2(){
    var inGenero = document.getElementById("inGenero");
    var genery = inGenero.value;

    var inNum1 = document.getElementById("inNum1");
    var num1 = Number(inNum1.value);

    var inNum2 = document.getElementById("inNum2");
    var num2 = Number(inNum2.value);

    var inAno = document.getElementById("inAno");
    var any = Number(inAno.value);

    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    console.log(any, genery, num1, num2, idade);

    window.location = "filtroCatalogo.html?URLany=" + any + "&URLgenery=" + genery + "&URLnum1=" + num1 + "&URLnum2=" + num2 + "&URLidade=" + idade;

    
}