import responseText from "../funcoesChat/responseText.js";
import commandReset from "../funcoesChat/commandReset.js";

import {services, polls} from "../api/index.js"
console.log(polls) //.service
console.log(services)



class Inputs{
//PROMPTS QUE O CHAT PODE RECEBER
//INICIAL
    inputInicial = {
        //1- DEFINIMOS A KEY (QUE DEVE SER O INPUT DO USUARIO), E O VALUE É UMA FUNÇÃO QUE SEMPRE TEM:
        //"responseText()": RESPOSTA DO CHAT & "commandReset()". Entre essas duas funções adicionamos toda a lógica das respostas
        "ajuda" : function(){
        //2- RESPOSTA PRO USUARIO
        responseText("Esses são os comandos que eu sei:")
        responseText(`
                    <strong>0-</strong>Ver Comandos<br>
                    <strong>1-</strong>Dizer alguma frase!<br>
                    <strong>ajuda-</strong>Mensagem de ajuda<br>
                    <strong>sair-</strong>Encerra o atendimento<br>
                    `);
        //
        //3- LOGICA AQUI, REQUISIÇÕES ETC
        //
        commandReset(); //RESETA AS ANIMAÇÕES DO CHAT, E SE O USUARIO IR PRO OUTRO 'PASSO', DEFINIR ESSE PASSO NO PARÂMETRO (NOME DO OBJETO)
        return
        },
    //DIZER OI
        1 : function(){
            
            services.forEach((servicos) => {
                if(servicos.department == 'Secretaria Municipal de Finanças')
                    responseText(`<strong>${servicos.id} - </strong>${servicos.name}<br>`)
                
            })
        
        //O USUARIO ESPERA UMA RESPOSTA DESSAS OPÇÕES DO CHAT ENTAO 'commandReset()' é TRUE.
        commandReset('SEFIN');
        return
        },
        2 : function(){
            
            services.forEach((servicos) => {
                if(servicos.department == 'Secretaria Municipal de Saúde')
                    responseText(`<strong>${servicos.id} - </strong>${servicos.name}<br>`)
                
            })
        
        //O USUARIO ESPERA UMA RESPOSTA DESSAS OPÇÕES DO CHAT ENTAO 'commandReset()' é TRUE.
        commandReset('IPTU');
        return
        },
        sair: function(){

            responseText('Adeus :)')
            responseText('Atendimento encerrado..')
            responseText(`<a href='#'>Clique aqui para voltar a tela inicial...</a>`)

            commandReset()
        }
    }
//IPTU
    SEFIN = {
        1 : function(){
            polls.forEach((questoes) => {
                if(questoes.service === 'IPTU')
                    responseText(`<strong>${questoes.id} - </strong>${questoes.title}<br>`)  
            })
            //
            //
            commandReset('questoes_SEFIN');
            return
        }
    }
    questoes_SEFIN = {
        1 : function(){
            polls.forEach((questoes) => {
                if(questoes.id === 1)
                    responseText(`${questoes.answer}`)  
            })
            //
            //
            commandReset();
            return
        }
    }
}

const inputsChat = new Inputs

const mapeamentoValores = {
    'IPTU': inputsChat.IPTU,
    'SEFIN': inputsChat.SEFIN,
    'questoes_SEFIN': inputsChat.questoes_SEFIN
};

export {mapeamentoValores}
export default inputsChat