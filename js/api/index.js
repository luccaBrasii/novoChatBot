import data from "./fetch.js";
const departments = data.departments
const chatList = document.querySelector('.chatlist')

var InputDisponiveis = {value: []}

//DA BOAS VINDAS E EXIBE OS DEPARTAMENTOS
   async function funcaoBoasVindas(){     

        chatList.innerHTML += `
                    <div class="botOutput">
                        <img src="./static/img/pmg-logo.png">
                        <li class="bot__output">
                            Olá, Seja bem-vindo(a) ao Assistente Virtual da Prefeitura Municipal de Goiânia!
                        </li>
                    </div>
                            `
        chatList.innerHTML += `
        <div class="botOutput">
            <img src="./static/img/pmg-logo.png" style="opacity: 0;">
            <li class="bot__output">
                Apenas os serviços listados abaixo estão disponíveis, aos poucos outros serão incluídos.
            </li>
        </div>
                `

        renderizaDepartamentos()

        await RevelaOutputs()

        
    }

    funcaoBoasVindas()
    

//

function renderizaDepartamentos(){
    departments.forEach( (departamento) => {
            
        InputDisponiveis.value.push(departamento.id)
        chatList.innerHTML += `
        <div class="botOutput">
            <img src="./static/img/pmg-logo.png" style="opacity: 0;">
            <li class="bot__output bot__output--standard">
                <strong>${departamento.id} - </strong>${departamento.category}<br>
            </li>
        </div>
        `
    })
}

async function RevelaOutputs(){
    const botOutputs = chatList.querySelectorAll('.bot__output');
    const botOutputs2 = chatList.querySelectorAll('.botOutput');

    botOutputs.forEach((botOutput, index) => {

            botOutput.style.animationDelay = `${(index + 1) * 600}ms`;
            botOutput.style.animationPlayState = 'running';
        });
    botOutputs2.forEach((botOutput, index) => {

        botOutput.style.animationDelay = `${(index + 1) * 600}ms`;
        botOutput.style.animationPlayState = 'running';
    });
}


export default InputDisponiveis
