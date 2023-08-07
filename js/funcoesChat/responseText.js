import animateBotOutput from "../efeitosVisuaisChat/animateBotOutput.js";

//FUNÇÃO PARA RESPOSTA DO CHAT... PODE SER USADO TAGS HTML DENTRO DA STRING 'TEXTO'
function responseText(texto) {
    const chatList = document.querySelector('.chatlist')
    var response = document.createElement('li');

    response.classList.add('bot__output');

    response.innerHTML = `${texto}`;

    chatList.appendChild(response);

    //FUNÇÃO QUE MUDA A ANIMAÇÃO NO CSS (ta no final...)
    animateBotOutput();

    
    setTimeout(function(){
      chatList.scrollTop = chatList.scrollHeight;
    }, 0)
  }


export default responseText