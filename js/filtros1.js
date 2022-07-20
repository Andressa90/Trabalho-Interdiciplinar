function buscar(){
    var pesquisa = document.querySelector(".pesquisaFilme");
    var filme = pesquisa.value;
    window.location = "pesquisa1.html?URLfilme=" + filme;
}