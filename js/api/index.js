import data from "./fetch.js";
const departments = data.departments
const chatList = document.querySelector('.chatlist')



//DA BOAS VINDAS E EXIBE OS DEPARTAMENTOS
    function funcaoBoasVindas(){     

        chatList.innerHTML = `<li class="bot__output">
                                Seja bem vindo!, estaremos dando inicio ao seu atendimento de nº 12345,
                                para começar, selecione um dos departamentos abaixo..
                            </li>
                            `
        departments.forEach( (departamento) => {
            
            chatList.innerHTML += `
                <li class="bot__output bot__output--standard">
                    <strong>${departamento.id} - </strong>${departamento.category}<br>
                </li>
            `
        })

        const botOutputs = chatList.querySelectorAll('.bot__output');

        botOutputs.forEach((botOutput, index) => {
                botOutput.style.animationDelay = `${(index + 1) * 600}ms`;
                botOutput.style.animationPlayState = 'running';
            });
    }

    funcaoBoasVindas()
//


