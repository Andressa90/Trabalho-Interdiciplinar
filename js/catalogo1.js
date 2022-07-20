


function filtro() {

    var titulo = ['Operação Dragão', 'Rocky - Um Lutador', 'Calígula', 'Cannibal Holocaust', 'Rocky II - A Revanche', 'Conan, o Bárbaro', 'Rambo - Programado para Matar', 'Rocky III - O Desafio Supremo', 'Rocky IV', 'Curtindo A Vida Adoidado', 'Curvas Perigosas', 'Rocky 5', 'O Silêncio dos Inocentes', 'Top Gang - Ases Muito Loucos', 'Drácula de Bram Stoker', 'Entrevista com Vampiro', 'Forrest Gump - O Contador de Histórias', 'O Carteiro e o Poeta', 'Amor Além da Vida', 'Piratas do Vale do Silício', 'Homens de Honra', 'Louco Por Você', 'Doce Novembro', 'Harry Potter e a Pedra Filosofal', 'O Diário de Bridget Jones', 'Onze Homens e Um Segredo', 'A Rainha dos Condenados', 'A Viagem de Chihiro', 'Dragão Vermelho', 'Harry Potter e a Câmara Secreta', 'Homem-aranha', 'Um amor para Recordar', 'Alien Vs. Predador', 'Amor Sem Fronteiras', 'Bad Boys 2', 'Harry Potter e o Prisioneiro De Azkaban', 'Matrix Reloaded', 'Matrix Revolution', 'O Amor Custa Caro', 'O Espanta Tubarões', 'Piratas do Caribe - A Maldição do Pérola Negra', 'Amor à Paisana', 'Antes que termine o dia', 'As Branquelas', 'Bridget Jones No Limite da Razão', 'Crash no Limite', 'Diários de Motocicleta', 'Doze Homens e Outro Segredo', 'Entrando Numa Fria Maior Ainda', 'Homem-aranha 2', 'Legalmente Loira 2', 'Loucas Férias de Inverno', 'Madrugada dos Mortos', 'Mar de Fogo', 'Meu Tio Matou um Cara', 'Olga', 'Show de Vizinha', 'Um Príncipe Em Minha Vida', 'Wimbledon - O Jogo do Amor', 'A Luta Pela Esperança', 'American Pie - Tocando a Maior Zona', 'Anjos da Noite 2', 'Apenas Amigos', 'Batman Begins', 'Bonecas Russas', 'Capote', 'De Repente é Amor', 'Dizem Por Aí', 'Harry Potter e o Cálice de Fogo', 'Hitch - Conselheiro Amoroso', 'Jogos Mortais 2', 'Mais Uma Vez Amor', 'Muito Bem Acompanhada', 'Na Cama', 'O Albergue', 'O Exorcismo de Emily Rose', 'O Melhor Jogo da História', 'Protegida Por um Anjo', 'Terapia do Amor', 'Um Lugar Para Recomeçar', '16 Quadras', 'A Procura da Felicidade', 'A Profecia', 'A Promessa', 'A trilha', 'Adrenalina', 'Alpha Dog', 'American Pie 5 - O Último Stifler Virgem', 'Apocalypto', 'Aprovados', 'Armações do Amor', 'As Torres Gêmeas', 'Bandidas', 'Black Snake Moan', 'Deu a Louca na Chapeuzinho', 'Em Busca do Prazer', 'Eragon', 'Fica Comigo Esta Noite', 'Jogos Mortais 3', 'Minha Super Ex-Namorada', 'Missão Impossível 3', 'O Código da Vinci', 'O Contrato', 'O Fator Hades', 'O Labirinto do Fauno', 'O Pacto', 'O Sacrifício', 'O Segredo', 'O Último Rei da Escócia', 'Os Infiltrados', 'Pequena Miss Sunshine', 'Piratas do Caribe - O Baú Da Morte', 'Premonição 3', 'Quase Virgem', 'Selvagem', 'Sorte no Amor', 'Uma Comédia Nada Romântica', 'Velozes e Furiosos - Desafio em Tóquio', 'Xeque Mate', 'Zoando na Escola', '300', 'A Estranha Perfeita', 'A Pele', 'A Rainha', 'Babel', 'Cartas De Iwo Jima', 'Déjà Vu', 'Deu a Louca em Hollywood', 'Diamante de Sangue', 'Escola de Idiotas', 'Férias de Mr.Bean', 'Hannibal - A Origem Do Mal', 'Homem Aranha 3', 'Motoqueiro Fantasma', 'Músicas e Letras', 'O Amor Não Tira Férias', 'O Amor Pode Dar Certo', 'O Bom Pastor', 'O Diabo Veste Prada', 'O Mar não Está Para Peixe', 'O Mestre das Armas', 'Os Simpsons - O Filme', 'Pecados Íntimos', 'Ponte Para Terabithia', 'Rocky Balboa', 'Shrek Terceiro', 'Superman O Retorno', 'Totalmente Apaixonados', 'Tropa de Elite', 'Uma Noite no Museu'];

var genero = ['Ação', 'Ação', 'Drama', 'Terror', 'Ação', 'Aventura', 'Ação', 'Ação', 'Ação', 'Comédia', 'Comédia', 'Ação', 'Suspense', 'Comédia', 'Terror', 'Terror', 'Drama', 'Drama', 'Drama', 'Drama', 'Drama', 'Comédia', 'Romance', 'Aventura', 'Comédia Romântica', 'Ação', 'Terror', 'Animação', 'Suspense', 'Aventura', 'Aventura', 'Drama', 'Terror', 'Drama', 'Ação', 'Aventura', 'Ficção', 'Ficção', 'Comédia Romântica', 'Animação', 'Ação', 'Comédia Romântica', 'Drama', 'Comédia', 'Comédia', 'Drama', 'Drama', 'Ação', 'Comédia', 'Aventura', 'Comédia', 'Comédia', 'Terror', 'Drama', 'Drama', 'Drama', 'Comédia', 'Comédia Romântica', 'Comédia Romântica', 'Drama', 'Comédia', 'Terror', 'Comédia Romântica', 'Ação', 'Comédia Romântica', 'Drama', 'Comédia Romântica', 'Comédia', 'Aventura', 'Comédia', 'Terror', 'Comédia Romântica', 'Comédia', 'Drama', 'Terror', 'Terror', 'Drama', 'Suspense', 'C.Romântica', 'Drama', 'Ação', 'Drama', 'Suspense', 'Drama', 'Drama', 'Ação', 'Drama', 'Comédia', 'Ação', 'Comédia', 'Comédia Romântica', 'Drama', 'Ação', 'Drama', 'Animação', 'Comédia Romântica', 'Aventura', 'Drama', 'Terror', 'Comédia', 'Ação', 'Drama', 'Drama', 'Suspense', 'Terror', 'Terror', 'Suspense', 'Documentário', 'Drama', 'Drama', 'Comédia Romântica', 'Aventura', 'Terror', 'Comédia', 'Animação', 'Comédia Romântica', 'Comédia', 'Ação', 'Ação', 'Comédia', 'Ação', 'Suspense', 'Drama', 'Drama', 'Drama', 'Drama', 'Ação', 'Comédia', 'Aventura', 'Comédia', 'Comédia', 'Drama', 'Aventura', 'Ação', 'Comédia Romântica', 'Comédia Romântica', 'Comédia Romântica', 'Drama', 'Comédia', 'Animação', 'Ação', 'Animação', 'Drama', 'Drama', 'Drama', 'Animação', 'Aventura', 'Comédia Romântica', 'Drama', 'Comédia'];

var valor = [15.5, 13.7, 12.1, 15.7, 15.6, 15.5, 12, 17.5, 13.7, 11.9, 17.3, 13.7, 17.5, 17.5, 11.9, 13.9, 11.9, 13.7, 12, 12, 12, 17.5, 17.3, 15.7, 15.7, 13.8, 11.9, 17.3, 12, 17.4, 13.8, 13.9, 13.9, 13.8, 15.7, 11.9, 15.7, 17.4, 17.3, 17.4, 17.3, 17.4, 13.8, 17.3, 17.3, 13.9, 17.4, 17.5, 15.5, 12, 17.5, 12, 13.9, 17.4, 11.9, 12.1, 12, 12.1, 11.9, 13.9, 15.5, 11.9, 13.7, 15.5, 13.9, 17.5, 13.8, 13.8, 17.3, 13.8, 17.5, 13.7, 11.9, 13.8, 15.7, 15.6, 15.7, 15.6, 17.5, 13.7, 15.6, 11.9, 15.6, 13.8, 15.6, 12.1, 17.3, 17.4, 13.7, 12, 17.4, 11.9, 17.5, 12, 15.5, 17.5, 17.5, 13.7, 15.6, 15.5, 15.5, 13.7, 12, 13.9, 17.3, 13.7, 15.5, 13.7, 17.4, 13.9, 17.5, 15.6, 15.6, 17.5, 15.7, 17.4, 13.9, 15.5, 13.9, 17.4, 17.3, 11.9, 11.9, 12.1, 15.7, 17.3, 15.5, 17.3, 12.1, 17.4, 13.8, 15.7, 13.7, 13.8, 15.6, 13.9, 13.8, 17.3, 12, 12, 13.7, 15.7, 12, 17.3, 17.4, 13.9, 15.5, 15.5, 15.5, 15.6];

var classificacao = [10, 10, 18, 18, 10, 14, 12, 10, 10, 0, 8, 10, 12, 0, 12, 10, 10, 0, 0, 0, 0, 0, 0, 0, 8, 8, 12, 0, 14, 0, 0, 0, 10, 10, 10, 0, 10, 10, 0, 0, 8, 8, 0, 0, 10, 14, 0, 10, 0, 0, 0, 8, 14, 8, 12, 10, 10, 0, 0, 10, 12, 10, 10, 12, 10, 12, 0, 0, 0, 8, 14, 0, 0, 14, 14, 14, 10, 0, 10, 0, 12, 0, 0, 10, 10, 12, 12, 12, 12, 0, 10, 10, 12, 14, 0, 14, 0, 10, 14, 0, 10, 8, 10, 12, 0, 10, 12, 0, 12, 10, 0, 0, 12, 12, 0, 0, 0, 10, 12, 0, 14, 10, 10, 10, 14, 12, 10, 8, 12, 0, 0, 14, 0, 0, 0, 0, 0, 10, 0, 8, 10, 0, 14, 0, 10, 0, 10, 0, 14, 0];

var ano = [1973, 1976, 1979, 1979, 1979, 1982, 1982, 1982, 1985, 1986, 1988, 1990, 1991, 1991, 1992, 1994, 1994, 1995, 1998, 1999, 2000, 2000, 2001, 2001, 2001, 2001, 2002, 2002, 2002, 2002, 2002, 2002, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007];

    var tr;
    
    var URLfiltro = new URLSearchParams(window.location.search);

    var filtro = URLfiltro.get("URLfiltro");

    var corpoTabela = document.querySelector(".corpoTabela");

    


    for (let i = 0; i < titulo.length; i++) {
        
        if (ano[i] == filtro) {
            var td = document.createElement('td');
            var pTitulo = document.createElement('pre');
            var paragrafo = document.createElement('p');

            pTitulo.classList.add("pTitulo");

            paragrafo.classList.add("paragrafo");

            var img = document.createElement('img');
            img.src = "../imagens/" + titulo[i] + ".jpg";
            img.classList.add("img-capas");



            pTitulo.textContent = "Titulo : " + titulo[i] + "\n Gênero : " + genero[i] + " \n Valor : R$ " + valor[i] + " \n Classificação : " + classificacao[i] + "+" + "\n Lançamento : " + ano[i];

            paragrafo.appendChild(img);
            paragrafo.appendChild(pTitulo);


            if (i % 4 != 0 || i % 4 == 0) {
                
                tr = document.createElement('tr');

            }

            td.appendChild(paragrafo);
            tr.appendChild(td);
            corpoTabela.appendChild(tr);

        }
    }
}