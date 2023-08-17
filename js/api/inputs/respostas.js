import data from "../fetch.js";
const services = data.polls


import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";

var respostas = {
    ajuda: function() {
        responseText("Esses são os comandos que eu sei:");
        responseText(`
            <strong>0-</strong>Ver Comandos<br>
            <strong>1-</strong>Dizer alguma frase!<br>
            <strong>ajuda-</strong>Mensagem de ajuda<br>
            <strong>sair-</strong>Encerra o atendimento<br>
        `);
        commandReset();
        return;
    },
    sair: function() {
        responseText('Adeus :)');
        responseText('Atendimento encerrado..');
        responseText(`<a href='#'>Clique aqui para voltar a tela inicial...</a>`);
        commandReset();
        return;
    }
};


services.forEach(service => {
      const id = service.id

//    if(inputUser.input === departament){
        respostas[id] = function() {
            responseText(`<p>${service.answer}</p>`);
            commandReset();
            return;
//      };
    }
    
});
/*
"polls": [
            {
                "id": 1,
                "title": "O que é Lorem Ipsum?",
                "answer": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletr\u00f4nica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletr\u00f4nica como Aldus PageMaker.",
                "link": null,
                "service": 1,
                "department": 1,
                "profile": 1
            },
            {
                "id": 2,
                "title": "Porque nós o usamos?",
                "answer": "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de \"Conteúdo aqui, conteúdo aqui\", fazendo com que ele tenha uma apar\u00eancia similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias vers\u00f5es novas surgiram ao longo dos anos, eventualmente por acidente, e \u00e0s vezes de propósito (injetando humor, e coisas do g\u00eanero).",
                "link": null,
                "service": 2,
                "department": 2,
                "profile": 2
            }
        ]
    }
*/



export default respostas