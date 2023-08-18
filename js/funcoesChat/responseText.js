import animateBotOutput from "../efeitosVisuaisChat/animateBotOutput.js";

//FUNÇÃO PARA RESPOSTA DO CHAT... PODE SER USADO TAGS HTML DENTRO DA STRING 'TEXTO'
function responseText(texto) {
  
    const chatList = document.querySelector('.chatlist');
    const userBubbleDiv = document.createElement('div');
    userBubbleDiv.classList.add('botOutput');

    const img = document.createElement('img');
    img.src = './static/img/pmg-logo.png';

    const userBubble = document.createElement('li');
    userBubble.classList.add('bot__output');

    // Execute a função do objeto possibleInput
    userBubble.innerHTML = texto // Certifique-se de que busca.value é o objeto correto

    userBubbleDiv.appendChild(img);
    userBubbleDiv.appendChild(userBubble);

    chatList.appendChild(userBubbleDiv);
    //FUNÇÃO QUE MUDA A ANIMAÇÃO NO CSS (ta no final...)
    animateBotOutput();

    
    setTimeout(function(){
      chatList.scrollTop = chatList.scrollHeight;
    }, 0)
  }


export default responseText