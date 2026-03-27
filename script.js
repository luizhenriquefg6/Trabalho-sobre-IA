const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao adentrar os portões do Castelo Digital, você se depara com uma tecnologia ancestral e poderosa: um grimório encantado que responde todas as dúvidas, cria imagens místicas e sons hiper-realistas. Como um cavaleiro da era moderna, qual o primeiro pensamento, Luiz?",
        alternativas: [
            {
                texto: "Isso é feitiçaria perigosa!",
                afirmacao: "No início, Luiz receou os poderes que essa magia tecnológica poderia desencadear. "
            },
            {
                texto: "Esta é a chave do reino!",
                afirmacao: "Luiz desejou dominar a arte da IA para fortalecer seu castelo diário."
            }
        ]
    },
    {
        enunciado: "Com a descoberta deste grimório, chamado Inteligência Artificial, uma sábia da torre de tecnologia decidiu realizar uma sequência de ensinamentos sobre esta magia. Ao final de uma aula, ela pede que Luiz escreva um pergaminho sobre o uso da IA nos salões de estudo. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza um pergaminho de busca na internet que emprega IA para encontrar informações valiosas e traduzir numa linguagem que facilite o entendimento.",
                afirmacao: "Luiz conseguiu utilizar a IA para coletar conhecimentos valiosos."
            },
            {
                texto: "Escreve o pergaminho com base nas conversas que teve com outros aprendizes, algumas pesquisas em bibliotecas virtuais e conhecimentos próprios sobre o tema.",
                afirmacao: "Luiz sentiu mais facilidade em utilizar seus próprios recursos para escrever seu pergaminho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do pergaminho escrito, a sábia realizou um conclave entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho dos cavaleiros no futuro. Nesse conclave, como Luiz se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de ofício e aprimorar habilidades humanas.",
                afirmacao: "Luiz vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com os cavaleiros que perderão seus postos para autômatos e defendo a importância de proteger os trabalhadores.",
                afirmacao: "A preocupação de Luiz com os trabalhadores motivou a criar uma guilda de estudos para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final do conclave, Luiz precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint (pincéis tradicionais).",
                afirmacao: "Luiz notou também que muitos aprendizes não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA (grimório de criação).",
                afirmacao: "Luiz acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Luiz tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente Luiz passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Luiz percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, no Grande Castelo...";
    textoResultado.textContent = "A jornada de Luiz: " + historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})