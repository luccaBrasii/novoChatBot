import data from "./fetch.js";
const chatList = document.querySelector('.chatlist')
//departments
//polls
//services
const departments = data.departments
const polls = data.polls
const services = data.services

//DA BOAS VINDAS E EXIBE OS DEPARTAMENTOS
function funcaoBoasVindas(){
    chatList.innerHTML += `<li class="bot__output bot__output--standard">
                                Seja bem vindo!, estaremos dando inicio ao seu atendimento de nº 12345
                           </li>
                            `
    departments.forEach( (departamento) => {
        chatList.innerHTML += `
            <li class="bot__output bot__output--standard">
                <strong>${departamento.id} - </strong>${departamento.category}<br>
            </li>
        `
})
}

console.log(departments)
funcaoBoasVindas()

export {services, polls}


