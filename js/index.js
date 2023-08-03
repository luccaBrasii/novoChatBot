var sendForm = document.querySelector('#chatform'),
    textInput = document.querySelector('.chatbox'),
    chatList = document.querySelector('.chatlist'),
    userBubble = document.querySelectorAll('.userInput'),
    botBubble = document.querySelectorAll('.bot__output'),
    animateBotBubble = document.querySelectorAll('.bot__input--animation'),
    hasCorrectInput,
    imgLoader = false,
    animationCounter = 1,
    animationBubbleDelay = 600,
    input,
    mensagemErro = "Desculpe não consegui entender :( para ver a lista de comandos digite: comandos"

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

//VERIFICA O INPUT DO USUARIO PARA VER SE ELE TEM RESPOSTA PARA ESSAS PERGUNTAS...
  function checkInput(input) {
    hasCorrectInput = false;
    //PERCORRE TODO O OBJETO possibleInput (abaixo) PARA VERIFICAR SE EXISTEM ALGUM COMANDO
    for(var textVal in possibleInput){
      
      //É UMA PALAVRA QUE ESTA NO OBJETO possibleInput?
      if(input == textVal){
        console.log("sucesso");
        hasCorrectInput = true;
        botResponse(textVal);
      }
    }
    //SE NÃO ACHAR A PALAVRA NO OBJETO possibleInput
    if(hasCorrectInput == false){
      console.log("falhou");
      comandoDesconhecido(mensagemErro);
      hasCorrectInput = true;
    }
  }


//FUNÇÃO EXCLUSIVA PARA RESPOSTAS AUTOMATICAS DO BOT, PARA FUNÇÕES PERSONALIZADAS USAR A responseText('texto')
  function botResponse(textVal) {
    var userBubble = document.createElement('li');
    userBubble.classList.add('bot__output');

    //EXECUTA A FUNÇÃO DO OBJETO possibleInput
    userBubble.innerHTML = possibleInput[textVal]();
      
    chatList.appendChild(userBubble)

    textInput.value = "";
  }
  
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

    animationCounter = 1;
  }

//FUNÇÃO PARA RESPOSTA DO CHAT...
  function responseText(texto) {

    var response = document.createElement('li');

    response.classList.add('bot__output');

    response.innerHTML = texto;

    chatList.appendChild(response);

    //FUNÇÃO QUE MUDA A ANIMAÇÃO NO CSS (ta no final...)
    animateBotOutput();

    
    setTimeout(function(){
      chatList.scrollTop = chatList.scrollHeight;
    }, 0)
  }



//CONTROLA A ANIMAÇÃO DAS BOLHAS DE CHAT PARA DAR UM VISUAL MELHOR..
  function animateBotOutput() {
    chatList.lastElementChild.style.animationDelay= (animationCounter * animationBubbleDelay)+"ms";
    animationCounter++;
    chatList.lastElementChild.style.animationPlayState = "running";
  }

//FUNÇÃO QUE USAMOS PRA RESETAR AS CONFIGS DO CHAT, COMO A VELOCIDADE QUE EXIBE OS BALOES DE CHAT 'animationCounter' e reseta o objeto 'possibleInput'
function commandReset(e){
  animationCounter = 1;
  previousInput = Object.keys(possibleInput)[e];
}

//PROMPTS QUE O CHAT PODE RECEBER
var possibleInput = {
  "ajuda" : function(){
    responseText("Ainda não temos comandos para ajuda :)")
    commandReset(0);
    return
    },
  "oi" : function(){
    responseText("Oi!");
    commandReset(1);
    return
    },
  "temperatura" : function(){
      var weather= new XMLHttpRequest();
      weather.open("GET", "https://api.thingspeak.com/channels/725914/feeds.json?api_key=R8UXP1FFMCLN5G4E", false);
      weather.send(null);
      var r =JSON.parse(weather.response);
      celcius = Math.round(r.feeds[r.channel.last_entry_id-1].field1);
      coverage = r.feeds[r.channel.last_entry_id-1].field2;
      responseText("A temperatura é "+celcius+" graus celcius" );
      commandReset(2);
      return
    },
  
	"humidade" : function(){
		var weather= new XMLHttpRequest();
		weather.open("GET", "https://api.thingspeak.com/channels/725914/feeds.json?api_key=R8UXP1FFMCLN5G4E", false);
        weather.send(null);
        var r =JSON.parse(weather.response);
        celcius = Math.round(r.feeds[r.channel.last_entry_id-1].field1);
        coverage = r.feeds[r.channel.last_entry_id-1].field2;
        responseText("A humidade é "+coverage);
        commandReset(2);
    return
    },
  "comandos" : function(){
    responseText("Esses são os comandos que eu sei:")
    responseText("ajuda, oi, temperatura, humidade, comandos e rick roll!");
    commandReset(3);
    return
  },
  "rick roll" : function(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
}

