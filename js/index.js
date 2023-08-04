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
    respostaChat,
    busca,
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
    
    //VERIFICA SE É UMA RESPOSTA QUE O CHAT PRECISA DAR OU UM PROMPT NORMAL...
      if(respostaChat == true){
        busca = respostsChat
      }else{
        busca = possibleInput
      }
    //PERCORRE TODO O OBJETO PARA VERIFICAR SE EXISTEM ALGUM COMANDO
    for(var textVal in busca){
      
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
    userBubble.innerHTML = busca[textVal]();
      
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

//FUNÇÃO PARA RESPOSTA DO CHAT... PODE SER USADO TAGS HTML DENTRO DA STRING 'TEXTO'
  function responseText(texto) {

    var response = document.createElement('li');

    response.classList.add('bot__output');

    response.innerHTML = `${texto}`;

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

//FUNÇÃO QUE USAMOS PRA RESETAR AS CONFIGS DO CHAT, COMO A VELOCIDADE QUE EXIBE OS BALOES DE CHAT 'animationCounter' 
//E recebe um parametro que é um valor Booleano: Se esse valor for True, ele busca as respostas no objeto 'respostsChat'
//Se for False, ele continua buscando nos possibleinput
  function commandReset(boleano){
    animationCounter = 1;
    respostaChat = boleano
  }

//PROMPTS QUE O CHAT PODE RECEBER
var possibleInput = {
  //1- DEFINIMOS A KEY (QUE DEVE SER O INPUT DO USUARIO), E O VALUE É UMA FUNÇÃO QUE SEMPRE TEM 
  //"responseText()": RESPOSTA DO CHAT & "commandReset()". Entre essas duas funções adicionamos toda a lógica das respostas
  "ajuda" : function(){
    //2- RESPOSTA PRO USUARIO
    responseText("Reza pra Deus :)")
    //
    //3- LOGICA AQUI, REQUISIÇÕES ETC
    //
    commandReset(false);
    return
    },
//VER COMANDOS
    0 : function(){
      responseText("Esses são os comandos que eu sei:")
      responseText(`
                    <strong>0-</strong>Ver Comandos<br>
                    <strong>1-</strong>Dizer alguma frase!<br>
                    <strong>2-</strong>Ver temperatura<br>
                    <strong>3-</strong>Ver humidade<br>
                  `);
      commandReset(false);
      return
    },
//DIZER OI
  1 : function(){
    responseText("1- OI");
    responseText("2- THAU");
    
    //O USUARIO ESPERA UMA RESPOSTA DESSAS OPÇÕES DO CHAT ENTAO 'commandReset()' é TRUE.
    commandReset(true);
    return
    },
//VER TEMPERATURA
  2 : function(){
      var weather= new XMLHttpRequest();
      weather.open("GET", "https://api.thingspeak.com/channels/725914/feeds.json?api_key=R8UXP1FFMCLN5G4E", false);
      weather.send(null);
      var r =JSON.parse(weather.response);
      celcius = Math.round(r.feeds[r.channel.last_entry_id-1].field1);
      coverage = r.feeds[r.channel.last_entry_id-1].field2;
      responseText("A temperatura é "+celcius+" graus celcius" );
      commandReset(false);
      return
    },
//VER HUMIDADE
	3 : function(){
		var weather= new XMLHttpRequest();
		weather.open("GET", "https://api.thingspeak.com/channels/725914/feeds.json?api_key=R8UXP1FFMCLN5G4E", false);
        weather.send(null);
        var r =JSON.parse(weather.response);
        celcius = Math.round(r.feeds[r.channel.last_entry_id-1].field1);
        coverage = r.feeds[r.channel.last_entry_id-1].field2;
        responseText("A humidade é "+coverage);
        commandReset(false);
    return
    }
}


//RESPOSTAS DOS INPUTS
var respostsChat = {
  1 : function(){
    responseText("OI")

    commandReset(false);
    return
    },
  2 : function(){
      //2- RESPOSTA PRO USUARIO
      responseText("Thau")
      
      commandReset(false);
      return
      }
}
