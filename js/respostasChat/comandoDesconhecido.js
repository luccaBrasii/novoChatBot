import animateBotOutput from "../efeitosVisuaisChat/animateBotOutput.js";
import {chatList, textInput, animationCounter} from '../index.js'


//FUNÇÃO QUE USAMOS PARA A RESPOSTAS QUE O CHAT NAO CONSEGUE RESPONDER
  function comandoDesconhecido(mensagemErro) {
      const userBubbleDiv = document.createElement('div');
      userBubbleDiv.classList.add('botOutput');
  
      const img = document.createElement('img');
      img.src = './static/img/pmg-logo.png';
  
      var failedResponse = document.createElement('li');
      

      failedResponse.classList.add('bot__output');
      failedResponse.classList.add('bot__output--failed');
  
      failedResponse.innerHTML = mensagemErro;
  
      userBubbleDiv.appendChild(img);
      userBubbleDiv.appendChild(failedResponse);
  
      chatList.appendChild(userBubbleDiv);


      //FUNÇÃO QUE MUDA A ANIMAÇÃO NO CSS (ta no final...)
      animateBotOutput();

      textInput.value = "";

      //SCROLL NA PAGINA PARA O BOT
      chatList.scrollTop = chatList.scrollHeight;

      animationCounter.value = 1;
    }

  export default comandoDesconhecido