import animateBotOutput from "../efeitosVisuaisChat/animateBotOutput.js";
import {chatList, textInput, animationCounter} from '../index.js'


//FUNÇÃO QUE USAMOS PARA A RESPOSTAS QUE O CHAT NAO CONSEGUE RESPONDER
  function comandoDesconhecido(mensagemErro) {
      //CRIA A BOLHA DE CHAT
      var failedResponse = document.createElement('li');
      

      failedResponse.classList.add('bot__output');
      failedResponse.classList.add('bot__output--failed');

      //ADD TEXTO A BOLHA
      failedResponse.innerHTML = mensagemErro;

      chatList.appendChild(failedResponse) 

      //FUNÇÃO QUE MUDA A ANIMAÇÃO NO CSS (ta no final...)
      animateBotOutput();

      textInput.value = "";

      //SCROLL NA PAGINA PARA O BOT
      chatList.scrollTop = chatList.scrollHeight;

      animationCounter.value = 1;
    }

  export default comandoDesconhecido