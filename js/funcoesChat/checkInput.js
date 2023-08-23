import botResponse from "./botResponse.js";
import comandoDesconhecido from "../respostasChat/comandoDesconhecido.js";
import { hasCorrectInput, busca, mensagemErro } from "../index.js";



//VERIFICA O INPUT DO USUARIO PARA VER SE ELE TEM RESPOSTA PARA ESSAS PERGUNTAS...
function checkInput(input) {
    hasCorrectInput.value = false;
   
    
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