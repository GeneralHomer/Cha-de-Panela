var listaItens = [
    {
        categoria: "cozinha",
        itens: [
            "Jogo de talheres", "Jogo de pratos", "Jogo de copos", "Assadeiras", "Escorredor de massas", "Abridor de latas/garrafas",
            "Peneira", "Escorredor de louças", "Jarra d'água", "Porta Detergente/Esponja", "Panos de prato", "Potes",
            "Tábua de corte", "Porta temperos", "Ralador", "Lixeira","Cuscuzeira","Forma de bolo","Tabuleiros",
            "Rodo de pia","Passadeira de cozinha","Jogo de Pratos","Luva de forno",
        ],
        funcaoCozinha: function(){
            return itemCozinha.innerText = itens;
        }
        },
    {
        categoria: "quarto",
        itens: [
            "Protetor de travesseiro", "Jogos de lençol", "Coberta pesada", "Coberta leve", "Travesseiro", "Cabides"
        ]
    },
    {
        categoria: "banheiro",
        itens: [
            "Toalhas de banho", "Toalhas de rosto", "Tapete", "Lixeira", "Porta escova de dente", "Saboneteira", "Escova sanitária"
        ]
    },
    {
        categoria: "areaDeServico",
        itens: [
            "Vassoura", "Rodo", "Pá de lixo", "Panos de chão", "Pregadores de roupa", "Baldes","Tábua de passar roupa",
            "Varal de chão"
            
        ]
    }
];
function adicionarItensNaLista(categoria, itens) {
    var lista = document.getElementById('lista-' + categoria);

    itens.forEach(function (item) {
        var li = document.createElement('li');
        var textInput = document.createElement('input');
        var paragraph = document.createElement('p');
        var btn = document.createElement('button');

        btn.classList.add('submitBtn');
        btn.innerText = 'Salvar';
        btn.type = 'submit';

        textInput.type = 'text';
        textInput.classList.add('inputs');
        textInput.placeholder = 'Digite aqui o seu nome';

        paragraph.classList.add('nomeParagrafo');
        paragraph.style.display = 'none';

        li.classList.add('liList');
        li.textContent = item + ': ';
        li.appendChild(textInput);
        li.appendChild(btn);
        li.appendChild(paragraph);
        lista.appendChild(li);

        /*var resetBtn = document.createElement('button');
        resetBtn.classList.add('resetBtn');
        resetBtn.innerText = 'Resetar Dados Locais';
        lista.appendChild(resetBtn);
        resetBtn.addEventListener('click', function resetarDadosLocais() {
            localStorage.removeItem('dados');
            console.log('Dados locais resetados.');
            // Limpa o parágrafo e exibe novamente o input
            paragraph.innerText = '';
            paragraph.style.display = 'none';
            textInput.style.display = 'block';
        });
        */
        btn.addEventListener('click', function salveNome(evt) {
            const inputValue = textInput.value;
            const regex = /^(?!.*(?:DROP|TABLE|DELETE|SELECT|FROM|AUTOINCREMENT|WHERE))[a-zA-Z ]{3,}$/;
            const testaRegex = regex.test(inputValue);

            if (inputValue.trim() !== '' && testaRegex) {
                const nomeItem = {
                    nome: inputValue,
                    item: item
                };

                const dadosAntigos = JSON.parse(localStorage.getItem('dados') || '[]');
                dadosAntigos.push(nomeItem);
                localStorage.setItem('dados', JSON.stringify(dadosAntigos));

                console.log('Dados salvos localmente:', nomeItem);

                // Exibe o nome do localStorage no parágrafo e oculta o input
                paragraph.innerText = nomeItem.nome;
                paragraph.style.display = 'block';
                textInput.style.display = 'none';
                btn.style.display= 'none';
            } else {
                alert('Você precisa escolher um item, inserir seu nome e salvar. Números e caracteres especiais não são aceitos');
            }
        });
    });
}

// Adiciona itens às listas
listaItens.forEach(function (categoriaItens) {
    adicionarItensNaLista(categoriaItens.categoria, categoriaItens.itens);
});

// Recupera os dados salvos localmente e exibe no console
const dadosSalvos = JSON.parse(localStorage.getItem('dados') || '[]');
console.log('Dados salvos localmente:', dadosSalvos);


