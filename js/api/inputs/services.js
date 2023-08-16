import data from "../fetch.js";
const services = data.polls

import groupServicesByDepartment from "../separaServicos.js";
import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";

import respostas from "./respostas.js";

function createInputObject(services) {
    const groupedServices = groupServicesByDepartment(services);

    const inputObject = {
        ajuda: function() {
            responseText("Esses são os comandos que eu sei:");
            responseText(`
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
                responseText(`<strong>${service.id} - </strong>${service.title}<br>`);
                commandReset(respostas);
                console.log('NOME: ' +service.title)
            }
            
        });
    });

    return inputObject;
}

const servicos = createInputObject(services)



export default servicos