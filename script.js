const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Rei Arthur convoca o Conselho da IA para decidir o futuro do reino. Como a inteligência artificial pode ajudar na defesa do castelo?",
        alternativas: [
            { texto: "Criar golems automatizados com magia algorítmica", afirmacao: "afirmação1" },
            { texto: "Desenvolver um sistema de visão computacional para as muralhas", afirmacao: "afirmação2" }
        ]
    },
    {
        enunciado: "A Grande Biblioteca do Reino está ameaçada pelo fogo. Como a IA pode preservar o conhecimento milenar?",
        alternativas: [
            { texto: "Digitalizar pergaminhos com OCR medieval e criar backup na nuvem", afirmacao: "afirmação3" },
            { texto: "Treinar um modelo de linguagem para recitar os manuscritos", afirmacao: "afirmação4" }
        ]
    },
    {
        enunciado: "O oráculo da vila prevê uma invasão. Como a IA pode ajudar na estratégia de batalha?",
        alternativas: [
            { texto: "Usar machine learning para prever rotas de ataque", afirmacao: "afirmação5" },
            { texto: "Criar sistema de reconhecimento facial para identificar espiões", afirmacao: "afirmação6" }
        ]
    },
    {
        enunciado: "A colheita real está fraca. Como a IA pode otimizar a produção agrícola?",
        alternativas: [
            { texto: "Implementar sensoriamento remoto nos campos", afirmacao: "afirmação7" },
            { texto: "Desenvolver algoritmo de previsão climática medieval", afirmacao: "afirmação8" }
        ]
    },
    {
        enunciado: "O castelo precisa de um sistema de comércio justo. Como a IA pode ajudar?",
        alternativas: [
            { texto: "Criar blockchain medieval para transações", afirmacao: "afirmação9" },
            { texto: "Implementar sistema de recomendação para feiras livres", afirmacao: "afirmação10" }
        ]
    }
];

let atual = 0;
let pontuacao = {
    afirmacao1: 0, afirmacao2: 0, afirmacao3: 0, afirmacao4: 0,
    afirmacao5: 0, afirmacao6: 0, afirmacao7: 0, afirmacao8: 0,
    afirmacao9: 0, afirmacao10: 0
};

function mostrarPergunta() {
    if (atual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            pontuacao[alternativa.afirmacao]++;
            atual++;
            mostrarPergunta();
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostrarResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    
    let resultadoTexto = "🏰 **Relatório do Conselho da IA** 🏰\n\n";
    
    const totalRespostas = Object.values(pontuacao).reduce((a,b) => a+b, 0);
    
    if (totalRespostas === perguntas.length) {
        resultadoTexto += "⚔️ *Veredito do Castelo:* ⚔️\n";
        resultadoTexto += "O reino abraçou a inteligência artificial com sabedoria medieval!\n\n";
        resultadoTexto += "📜 *Conquistas desbloqueadas:* 📜\n";
        
        const escolhas = [];
        if (pontuacao.afirmacao1 > 0) escolhas.push("• Golems algorítmicos patrulham as muralhas");
        if (pontuacao.afirmacao2 > 0) escolhas.push("• Visão computacional vigia o horizonte");
        if (pontuacao.afirmacao3 > 0) escolhas.push("• Biblioteca digitalizada para a eternidade");
        if (pontuacao.afirmacao4 > 0) escolhas.push("• Modelo de linguagem guarda os pergaminhos");
        if (pontuacao.afirmacao5 > 0) escolhas.push("• Machine learning prevê invasões");
        if (pontuacao.afirmacao6 > 0) escolhas.push("• Reconhecimento facial nos portões");
        if (pontuacao.afirmacao7 > 0) escolhas.push("• Sensoriamento remoto nos campos");
        if (pontuacao.afirmacao8 > 0) escolhas.push("• Previsão climática para colheitas");
        if (pontuacao.afirmacao9 > 0) escolhas.push("• Blockchain medieval nas transações");
        if (pontuacao.afirmacao10 > 0) escolhas.push("• Recomendação inteligente nas feiras");
        
        resultadoTexto += escolhas.join("\n");
        resultadoTexto += "\n\n✨ *O futuro medieval está em suas mãos!* ✨";
    }
    
    textoResultado.textContent = resultadoTexto;
}

// Sistema de relógio medieval
function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Iniciar o jogo
mostrarPergunta();
