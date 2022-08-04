function buscarPesquisa() {
    var pesquisa = document.querySelector(".pesquisaFilme");
    var filme = pesquisa.value;
    window.location = "pesquisa.html?URLfilme=" + filme;
}