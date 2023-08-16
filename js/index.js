//IMPORTACOES
  import chatUsuario from './efeitosVisuaisChat/chatUsuario.js';
  import { inputInicial } from './api/inputs/inputInicial.js';

//VARIAVEIS
  const chatList = document.querySelector('.chatlist')
  const textInput = document.querySelector('.chatbox')
  const sendForm = document.querySelector('#chatform')
  
  var animationCounter = {value: 1}
  var hasCorrectInput = {value: undefined}
  var busca = {value: inputInicial}

 //EXPORTACOES
  export {
    chatList,
    textInput,
    animationCounter,
    hasCorrectInput,
    busca
  }
//


  
//DETECTA O ENVIO DA MENSAGEM DO USUARIO POR PRESSIONAR 'ENTER' E RENDERIZA A MENSAGEM NO FRONT
  sendForm.onkeydown = function(e){
    if(e.keyCode == 13){
      e.preventDefault();

      //INPUT DO USUARIO
      var input = textInput.value.toLowerCase();

      if(input.length > 0) {
        chatUsuario(input)
      }
    }
  };

//DETECTA O ENVIO DA MENSAGEM DO USUARIO E RENDERIZA A MENSAGEM NO FRONT
  sendForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var input = textInput.value.toLowerCase();

    if(input.length > 0) {
      chatUsuario(input)
    }
  }) 