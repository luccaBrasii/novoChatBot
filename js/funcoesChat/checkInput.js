import botResponse from "./botResponse.js";
import comandoDesconhecido from "../respostasChat/comandoDesconhecido.js";
import { hasCorrectInput, respostaChat, busca } from "../index.js";

import inputsChat from "../respostasChat/index.js";

const mensagemErro = "Desculpe não consegui entender :( para ver a lista de comandos digite: comandos"


//VERIFICA O INPUT DO USUARIO PARA VER SE ELE TEM RESPOSTA PARA ESSAS PERGUNTAS...
function checkInput(input) {
    hasCorrectInput.value = false;
    //VERIFICA SE É UMA RESPOSTA QUE O CHAT PRECISA DAR OU UM PROMPT NORMAL...
      if(respostaChat.value === 'IPTU'){
        console.log('saiu');
        busca.value = inputsChat.IPTU
      }else{
        console.log('entrou');
        busca.value = inputsChat.inputInicial
      }
    //PERCORRE TODO O OBJETO PARA VERIFICAR SE EXISTEM ALGUM COMANDO
    
    for(var textVal in busca.value){
      
      //É UMA PALAVRA QUE ESTA NO OBJETO possibleInput?
      if(input == textVal){
        console.log("sucesso");
        hasCorrectInput.value = true;
        botResponse(textVal);
      }

    }
    //SE NÃO ACHAR A PALAVRA NO OBJETO possibleInput
    if(hasCorrectInput.value == false){
      console.log("falhou");
      comandoDesconhecido(mensagemErro);
      hasCorrectInput.value = true;
    }

    
  }

export default checkInput