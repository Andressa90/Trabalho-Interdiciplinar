function receber() {
    var URLfilme = new URLSearchParams(window.location.search);

    var filme = URLfilme.get("URLfilme");

    var corpoTabela = document.querySelector(".corpoTabela");

    for (let i = 0; i < titulo.length; i++) {
        if (titulo[i] == filme) {
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


            if (i % 4 == 0) {
                tr = document.createElement('tr');

            }

            td.appendChild(paragrafo);
            tr.appendChild(td);
            corpoTabela.appendChild(tr);

        }
    }
}


