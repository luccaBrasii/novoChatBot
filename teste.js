const services= [
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
        "name": "EMISSÃO DE ALVARÁ SANITÁRIO 2",
        "department": 2
    }
]

function groupServicesByDepartment(services) {
    const groupedServices = {};

    services.forEach((service) => {
        const department = service.department;
        
        if (!groupedServices[department]) {
            groupedServices[department] = [];
        }

        groupedServices[department].push(service);
    });

    return groupedServices;
}

//

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
                commandReset(service.name);
            };
        });
    });

    return inputObject;
}


const inputInicial = createInputObject(services);

export default inputInicial
