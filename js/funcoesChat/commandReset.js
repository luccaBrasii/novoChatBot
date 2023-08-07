//FUNÇÃO QUE USAMOS PRA RESETAR AS CONFIGS DO CHAT, COMO A VELOCIDADE QUE EXIBE OS BALOES DE CHAT 'animationCounter' 
//E recebe um parametro que é um valor Booleano: Se esse valor for True, ele busca as respostas no objeto 'respostsChat'
//Se for False, ele continua buscando nos possibleinput
import {animationCounter, respostaChat} from "../index.js";

function commandReset(boleano = 'InputInicial'){

    animationCounter.value = 1;
    respostaChat.value = boleano

  }

export default commandReset