
function receber() {
    var corpoTabela = document.querySelector(".corpoTabela");

    var contDrama = 0;
    var contTerror = 0;
    var contComedia = 0;
    var contRomance = 0;
    var contAventura = 0;
    var contFiccao = 0;
    var contComRomantica = 0;
    var contAnimacao = 0;
    var contAcao = 0;
    var contSuspense = 0;

    var iMaiorDrama;
    var iMaiorAcao;
    var iMaiorTerror;
    var iMaiorComedia;
    var iMaiorRomance;
    var iMaiorAventura;
    var iMaiorFiccao;
    var iMaiorComRomantica;
    var iMaiorAnimacao;
    var iMaiorSuspense;

    for (let i = 0; i < genero.length; i++) {
        switch (genero[i]) {
            case "Drama":
                contDrama++;
                if (contDrama == 1) {
                    iMaiorDrama = i;
                } else {
                    if (valor[i] > valor[iMaiorDrama]) {
                        iMaiorDrama = i;
                    }
                }
                break;
            case "Terror":
                contTerror++;
                if (contTerror == 1) {
                    iMaiorTerror = i;
                } else {
                    if (valor[i] > valor[iMaiorTerror]) {
                        iMaiorTerror = i;
                    }
                }
                break;
            case "Comédia":
                contComedia++;
                if (contComedia == 1) {
                    iMaiorComedia = i;
                } else {
                    if (valor[i] > valor[iMaiorComedia]) {
                        iMaiorComedia = i;
                    }
                }
                break;
            case "Romance":
                contRomance++;
                if (contRomance == 1) {
                    iMaiorRomance = i;
                } else {
                    if (valor[i] > valor[iMaiorRomance]) {
                        iMaiorRomance = i;
                    }
                }

                break;
            case "Aventura":
                contAventura++;
                if (contAventura == 1) {
                    iMaiorAventura = i;
                } else {
                    if (valor[i] > valor[iMaiorAventura]) {
                        iMaiorAventura = i;
                    }
                }
                break;
            case "Ficção":
                contFiccao++;
                if (contFiccao == 1) {
                    iMaiorFiccao = i;
                } else {
                    if (valor[i] > valor[iMaiorFiccao]) {
                        iMaiorFiccao = i;
                    }
                }
                break;
            case "Comédia Romântica":
                contComRomantica++;
                if (contComRomantica == 1) {
                    iMaiorComRomantica = i;
                } else {
                    if (valor[i] > valor[iMaiorComRomantica]) {
                        iMaiorComRomantica = i;
                    }
                }

                break;
            case "Animação":
                contAnimacao++;
                if (contAnimacao == 1) {
                    iMaiorAnimacao = i;
                } else {
                    if (valor[i] > valor[iMaiorAnimacao]) {
                        iMaiorAnimacao = i;
                    }
                }
                break;
            case "Ação":
                contAcao++;
                if (contAcao == 1) {
                    iMaiorAcao = i;
                } else {
                    if (valor[i] > valor[iMaiorAcao]) {
                        iMaiorAcao = i;
                    }
                }
                break;
            case "Suspense":
                contSuspense++;
                if (contSuspense == 1) {
                    iMaiorSuspense = i;
                } else {
                    if (valor[i] > valor[iMaiorSuspense]) {
                        iMaiorSuspense = i;
                    }
                }

        }
    }

    var tr = document.createElement('tr');
    var tdGenero = document.createElement('td');
    tdGenero.textContent = "Drama";
    var tdQtd = document.createElement('td');
    var tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorDrama] + "  - R$ " + valor[iMaiorDrama];
    tdQtd.textContent = contDrama;
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Terror";
    tdQtd = document.createElement('td');
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorTerror] + "  - R$ " + valor[iMaiorTerror];
    tdQtd.textContent = contTerror;
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Comédia";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contComedia;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorComedia] + "  - R$ " + valor[iMaiorComedia];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Romance";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contRomance;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorRomance] + "  - R$ " + valor[iMaiorRomance];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Aventura";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contAventura;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorAventura] + "  - R$ " + valor[iMaiorAventura];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Ficção";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contFiccao;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorFiccao] + "  - R$ " + valor[iMaiorFiccao];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Comédia Romântica";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contComRomantica;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorComRomantica] + "  - R$ " + valor[iMaiorComRomantica];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Animação";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contAnimacao;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorAnimacao] + "  - R$ " + valor[iMaiorAnimacao];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Ação";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contAcao;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorAcao] + "  - R$ " + valor[iMaiorAcao];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);

    tr = document.createElement('tr');
    tdGenero = document.createElement('td');
    tdGenero.textContent = "Suspense";
    tdQtd = document.createElement('td');
    tdQtd.textContent = contSuspense;
    tdMaiorValor = document.createElement('td');
    tdMaiorValor.textContent = titulo[iMaiorSuspense] + "  - R$ " + valor[iMaiorSuspense];
    tr.appendChild(tdGenero);
    tr.appendChild(tdQtd);
    tr.appendChild(tdMaiorValor);
    corpoTabela.appendChild(tr);



}



