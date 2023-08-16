import data from "../fetch.js";
const services = data.services

import groupServicesByDepartment from "../separaServicos.js";
import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";

import servicos from "./services.js";


function createInputObject(services) {
    const groupedServices = groupServicesByDepartment(services);

    const inputObject = {
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
        }
    };

    Object.keys(groupedServices).forEach((department) => {
        groupedServices[department].forEach((service) => {
            
            inputObject[service.id] = function() {
                responseText(`<strong>${service.id} - </strong>${service.name}<br>`);
                commandReset(servicos);
                console.log('NOME: ' +service.name)
                
            };
        });
    });

    return inputObject;
}


const inputInicial = createInputObject(services);

export {inputInicial}