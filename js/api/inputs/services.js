import data from "../fetch.js";
const services = data.polls


import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";

import {respostas} from "./respostas.js";

var servicos = {
    ajuda: function() {
        responseText("Esses são os comandos que eu sei:");
        responseText(`
            <strong>0-</strong>Ver Comandos<br>
            <strong>1-</strong>Dizer alguma frase!<br>
            <strong>ajuda-</strong>Mensagem de ajuda<br>
            <strong>sair-</strong>Encerra o atendimento<br>
        `);
        commandReset();
        return;
    },
    sair: function() {
        responseText('Adeus :)');
        responseText('Atendimento encerrado..');
        responseText(`<a href='#'>Clique aqui para voltar a tela inicial...</a>`);
        commandReset();
        return;
    }
};


function separaRespostas(input){

    var lista = []

    services.forEach(service => {
        const id = service.id;
        const departament = service.department.toString();
        
            if(input == departament){
                lista.push(service)
            }

            servicos[departament] = function() {
                lista.forEach(service => {
                        responseText(`<strong>${departament} - </strong>${service.title}<br>`);
                        commandReset(respostas);
                        return;
                })
            }
            
            
        })

        
}


export  {servicos, separaRespostas}