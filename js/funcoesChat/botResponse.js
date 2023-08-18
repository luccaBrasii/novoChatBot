import { chatList, busca, textInput } from "../index.js";

//FUNÇÃO EXCLUSIVA PARA RESPOSTAS AUTOMATICAS DO BOT, PARA FUNÇÕES PERSONALIZADAS USAR A responseText('texto')
function botResponse(textVal) {
    var userBubble = document.createElement('li');
    userBubble.classList.add('bot__output');
    
    //EXECUTA A FUNÇÃO DO OBJETO possibleInput
    userBubble.innerHTML = busca.value[textVal]();
      
    chatList.appendChild(userBubble)
    
    textInput.value = "";
  }

export default botResponse