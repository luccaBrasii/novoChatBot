const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

app.get('/api', (req, res) => {
  const jsonResponse = {
    "departments": [
        {
            "id": 1,
            "name": "Secretaria Municipal de Finanças",
            "category": "Finanças"
        },
        {
            "id": 2,
            "name": "Secretaria Municipal de Saúde",
            "category": "Saúde"
        }
    ],
    "services": [
        {
            "id": 1,
            "name": "IPTU",
            "department": "Secretaria Municipal de Finanças"
        },
        {
            "id": 2,
            "name": "ISSQN",
            "department": "Secretaria Municipal de Finanças"
        },
        {
            "id": 3,
            "name": "EMISSÃO DE ALVARÁ SANITÁRIO",
            "department": "Secretaria Municipal de Saúde"
        }
    ],
    "polls": [
        {
            "id": 1,
            "title": "O que é Lorem Ipsum?",
            "answer": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletr\u00f4nica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletr\u00f4nica como Aldus PageMaker.",
            "link": null,
            "service": "IPTU",
            "department": "Secretaria Municipal de Finanças",
            "profile": "User Finanças"
        },
        {
            "id": 2,
            "title": "Porque nós o usamos?",
            "answer": "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de \"Conteúdo aqui, conteúdo aqui\", fazendo com que ele tenha uma apar\u00eancia similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias vers\u00f5es novas surgiram ao longo dos anos, eventualmente por acidente, e \u00e0s vezes de propósito (injetando humor, e coisas do g\u00eanero).",
            "link": null,
            "service": "EMISSÃO DE ALVARÁ SANITÁRIO",
            "department": "Secretaria Municipal de Saúde",
            "profile": "User Saúde"
        }
    ]
};
  res.json(jsonResponse);
});


app.listen(PORT, () => {
  console.log(`Servidor Express iniciado na porta ${PORT}`);
});