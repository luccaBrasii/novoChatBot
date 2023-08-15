import botResponse from "./botResponse.js";
import comandoDesconhecido from "../respostasChat/comandoDesconhecido.js";
import { hasCorrectInput, busca } from "../index.js";
import { mapeamentoValores } from "../respostasChat/index.js";
import inputsChat from "../respostasChat/index.js";

const mensagemErro = "Desculpe não consegui entender :( para ver a lista de comandos digite: ajuda"

//VERIFICA O INPUT DO USUARIO PARA VER SE ELE TEM RESPOSTA PARA ESSAS PERGUNTAS...
function checkInput(input) {
    hasCorrectInput.value = false;
    
    if (busca.value in mapeamentoValores) {
      busca.value = mapeamentoValores[busca.value];
      console.log('saiu');
    } else {
      busca.value = inputsChat.inputInicial;
      console.log('entrou');
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