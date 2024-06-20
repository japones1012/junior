const perguntas = [
    {
    enunciado: "Você joga free fire?",
    alternativas: [
    "Sim",
    "Não"
    ]
    },
    {
    enunciado: "Você prefere scar ou m4a1?",
    alternativas: [
    "m4a1",
    "scar"
    ]
    },
    {
    enunciado: "futsal ou pin pong?",
    alternativas: [
    "futsal",
    "pin pong"
    ]
    },
    {
    enunciado: "Prefere ser goleiro ou jogar na linha?",
    alternativas: [
    "Jogar na linha",
    " Ser goleiro"
    ]
   
    },
    {
    enunciado: "Você ja foi campeão no futebol ou futsal?",
    alternativas: [
        "Sim",
        "Não"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();

