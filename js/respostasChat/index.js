import responseText from "../funcoesChat/responseText.js";
import commandReset from "../funcoesChat/commandReset.js";

class Inputs{
//PROMPTS QUE O CHAT PODE RECEBER
//INICIAL
    inputInicial = {
        //1- DEFINIMOS A KEY (QUE DEVE SER O INPUT DO USUARIO), E O VALUE É UMA FUNÇÃO QUE SEMPRE TEM:
        //"responseText()": RESPOSTA DO CHAT & "commandReset()". Entre essas duas funções adicionamos toda a lógica das respostas
        "ajuda" : function(){
        //2- RESPOSTA PRO USUARIO
            responseText("Reza pra Deus :)")
        //
        //3- LOGICA AQUI, REQUISIÇÕES ETC
        //
        commandReset(); //RESETA AS ANIMAÇÕES DO CHAT, E SE O USUARIO IR PRO OUTRO 'PASSO', DEFINIR ESSE PASSO NO PARÂMETRO (NOME DO OBJETO)
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
        responseText("1- IPTU");
        responseText("2- ALGO");
        
        //O USUARIO ESPERA UMA RESPOSTA DESSAS OPÇÕES DO CHAT ENTAO 'commandReset()' é TRUE.
        commandReset('IPTU');
        return
        }
    }
//IPTU
    IPTU = {
        1 : function(){
            responseText("Algo sobre iptu")
            //
            //
            commandReset();
            return
        },
        2 : function(){
            //2- RESPOSTA PRO USUARIO
            responseText("Algo sobre algo")
            
            commandReset();
            return
            }
    }
}

const inputsChat = new Inputs

export default inputsChat