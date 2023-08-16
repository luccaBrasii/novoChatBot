import data from "../fetch.js";
const services = data.polls

import groupServicesByDepartment from "../separaServicos.js";
import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";


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
                
                responseText(`<strong>${service.answer} - </strong><br>`);
                responseText(`Digite: <strong>sair</strong>, para encerrar o atendimento..`);
                commandReset();
                console.log('NOME: ' +service.title)
                
            };
        });
    });

    return inputObject;
}

const respostas = createInputObject(services)



export default respostas