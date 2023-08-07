import checkInput from "../funcoesChat/checkInput.js";
import { chatList } from "../index.js";

//CRIA O 'VISUAL DE MENSAGEM' NO FRONT
function chatUsuario(input) {
    
    var chatBubble = document.createElement('li');
    chatBubble.classList.add('userInput');

    //ADICIONA O INPUT DO USUARIO 
    chatBubble.innerHTML = input;

    //ADD O BALAO DE CONVERSA AO CHAT
    chatList.appendChild(chatBubble)

    //VERIFICA O INPUT DO USUARIO
    checkInput(input);
  }

export default chatUsuario