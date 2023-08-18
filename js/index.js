//IMPORTACOES
  import chatUsuario from './efeitosVisuaisChat/chatUsuario.js';
  import { inputInicial, separaServices } from './api/inputs/inputInicial.js';
  import { separaRespostas } from './api/inputs/services.js';
  import { separaAnswer } from './api/inputs/respostas.js';

//VARIAVEIS
  const chatList = document.querySelector('.chatlist')
  const textInput = document.querySelector('.chatbox')
  const sendForm = document.querySelector('#chatform')

  var animationCounter = {value: 1}
  var hasCorrectInput = {value: undefined}
  var busca = {value: inputInicial}
  
 
//DETECTA O ENVIO DA MENSAGEM DO USUARIO POR PRESSIONAR 'ENTER' E RENDERIZA A MENSAGEM NO FRONT

  sendForm.onkeydown = function(e){
    if(e.keyCode == 13){
      e.preventDefault();

      const input = textInput.value.toLowerCase();

      if(input.length > 0) {
        separaServices(input)
        separaRespostas(input)
        separaAnswer(input)


        chatUsuario(input)
      }
    }
  };

//DETECTA O ENVIO DA MENSAGEM DO USUARIO E RENDERIZA A MENSAGEM NO FRONT
  sendForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = textInput.value.toLowerCase();

    if(input.length > 0) {
      separaServices(input)
      separaRespostas(input)
      separaAnswer(input)


      chatUsuario(input)
    }
  }) 


//EXPORTACOES
  export {
    chatList,
    textInput,
    animationCounter,
    hasCorrectInput,
    busca
  }


