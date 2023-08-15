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

export default groupServicesByDepartment

