function filtro() {
    var tr;

    var URL = new URLSearchParams(window.location.search);

    var lancamento = URL.get("URLany");

    var genery = URL.get("URLgenery");

    var num1 = URL.get("URLnum1");

    var num2 = URL.get("URLnum2");

    var idade = URL.get("URLidade");

    var corpoTabela = document.querySelector(".corpoTabela");

    var contFiltrados = 0;

    for (let i = 0; i < titulo.length; i++) {

        if ((ano[i] == lancamento || lancamento == 0) && (genero[i] == genery || genery == 'Todos') && (classificacao[i] >= idade || idade == 0) && (valor[i] >= num1 && valor[i] <= num2 || num1 == 0 || num2 == 0)) {

            var td = document.createElement('td');
            var pTitulo = document.createElement('pre');
            var paragrafo = document.createElement('p');

            pTitulo.classList.add("pTitulo");

            paragrafo.classList.add("paragrafo");

            var img = document.createElement('img');
            img.src = "imagens/" + titulo[i] + ".jpg";
            img.classList.add("img-capas");



            pTitulo.textContent = "Titulo : " + titulo[i] + "\n Gênero : " + genero[i] + " \n Valor : R$ " + valor[i] + " \n Classificação : " + classificacao[i] + "+" + "\n Lançamento : " + ano[i];

            paragrafo.appendChild(img);
            paragrafo.appendChild(pTitulo);


            if (contFiltrados % 4 == 0) {

                tr = document.createElement('tr');

            }

            td.appendChild(paragrafo);
            tr.appendChild(td);
            corpoTabela.appendChild(tr);

            contFiltrados++;

        }
    }
}