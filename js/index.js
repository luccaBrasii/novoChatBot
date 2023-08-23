//IMPORTACOES
  import chatUsuario from './efeitosVisuaisChat/chatUsuario.js';
  import { inputInicial, separaServices } from './api/inputs/inputInicial.js';
  import { separaRespostas } from './api/inputs/services.js';
  import { separaAnswer } from './api/inputs/respostas.js';


//VARIAVEIS
  const chatList = document.querySelector('.chatlist')
  const textInput = document.querySelector('.chatbox')
  const sendForm = document.querySelector('#chatform')
  const mensagemErro = "Desculpe não consegui entender :( para ver a lista de comandos digite: ajuda"

  var animationCounter = {value: 1}
  var hasCorrectInput = {value: undefined}
  var busca = {value: inputInicial}
  var passo = {value: 1}
//DETECTA O ENVIO DA MENSAGEM DO USUARIO POR PRESSIONAR 'ENTER' E RENDERIZA A MENSAGEM NO FRONT
  

  sendForm.onkeydown = function(e){
    if(e.keyCode == 13){
      e.preventDefault();

      const input = textInput.value.toLowerCase();

      if(input.length > 0) {
        if(passo.value == 1){
          separaServices(input)
        }else if(passo.value == 2){
          separaRespostas(input)
        }else if(passo.value == 3){
          separaAnswer(input)
        }
        
        chatUsuario(input)
      }
    }
  };

//DETECTA O ENVIO DA MENSAGEM DO USUARIO E RENDERIZA A MENSAGEM NO FRONT
  sendForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = textInput.value.toLowerCase();

    if(input.length > 0) {
      if(passo.value == 1){
        separaServices(input)
      }else if(passo.value == 2){
        separaRespostas(input)
      }else if(passo.value == 3){
        separaAnswer(input)
      }
      
      chatUsuario(input)
    }
  }) 


//EXPORTACOES
  export {
    chatList,
    textInput,
    animationCounter,
    hasCorrectInput,
    busca,
    mensagemErro,
    passo
  }


