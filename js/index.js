//IMPORTACOES
  import chatUsuario from './efeitosVisuaisChat/chatUsuario.js';


//EXPORTACOES
  const chatList = document.querySelector('.chatlist')
  const textInput = document.querySelector('.chatbox')

  var animationCounter = {value: 1}
  var hasCorrectInput = {value: undefined}
  var respostaChat = {value: 'inputInicial'}
  var busca = {value: undefined}

  export {
    chatList,
    textInput,
    animationCounter,
    hasCorrectInput,
    respostaChat,
    busca
  }
//

var sendForm = document.querySelector('#chatform')
  
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