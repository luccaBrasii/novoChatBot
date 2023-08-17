import data from "../fetch.js";
const services = data.services

import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import servicos from "./services.js";

const inputInicial = {
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
  
services.forEach(service => {
    const id = service.id;
    const name = service.name;
    const departament = service.department.toString();

//    if(inputUser.input === departament){
    
        inputInicial[id] = function() {
            responseText(`<strong>${id} - </strong>${name}<br>`);
            commandReset(servicos);
            return;
//      };
    }
    
});

/*
"services": [
            {
                "id": 1,
                "name": "IPTU",
                "department": 1
            },
            {
                "id": 2,
                "name": "EMISSÃO DE ALVARÁ SANITÁRIO",
                "department": 2
            },
            {
                "id": 3,
                "name": "IPTU 2",
                "department": 1
            },
        ],
*/

export {inputInicial}