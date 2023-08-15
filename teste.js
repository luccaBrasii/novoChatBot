const data = [
    {
        "id": 1,
        "name": "IPTU",
        "department": 1
    },
    {
        "id": 2,
        "name": "EMISSÃO DE ALVARÁ SANITÁRIO",
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

//console.log(groupServicesByDepartment(data))
const groupedServices = groupServicesByDepartment(data)
const inputObject = {}

Object.keys(groupedServices).forEach((department) => {
    groupedServices[department].forEach((service) => {
        inputObject[service.id] = function() {
            responseText(`<strong>${service.id} - </strong>${service.name}<br>`);
            commandReset(service.name);
            console.log('NOME: ' +service.name)
            
        };
    });
});

console.log(inputObject)