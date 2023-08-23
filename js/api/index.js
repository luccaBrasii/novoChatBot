import data from "./fetch.js";
const departments = data.departments
const chatList = document.querySelector('.chatlist')
import responseText from "../funcoesChat/responseText.js";
import commandReset from "../funcoesChat/commandReset.js";
import { resetaInputsDisponiveis } from "../funcoesChat/commandReset.js";
import { inputEscolhido } from "../index.js";
import { servicos } from "./inputs/services.js";
import botResponse from "../funcoesChat/botResponse.js";
import { inputInicial } from "./inputs/inputInicial.js";

var InputDisponiveis = {value: []}
var InputsAntigosDisponiveis = {value: []}

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

async function renderizaDepartamentos(){
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

    InputsAntigosDisponiveis.value = InputDisponiveis.value
    
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


function voltar(parametro){
    if(parametro === 'services'){
        departments.forEach( (departamento) => {
            responseText(`<strong>${departamento.id} - </strong>${departamento.category}<br>`)
        })
    
        commandReset()
        resetaInputsDisponiveis(InputsAntigosDisponiveis.value)
    }
    
    else if( parametro === 'voltaService'){

        commandReset(inputInicial, 1)
        botResponse(inputEscolhido.value)
        console.log(inputEscolhido.value);

    }
    
    else if( parametro === 'inicial'){
        responseText('Impossível voltar!')
    }

    else if( parametro === 'final'){
        
        commandReset(servicos, 2)
        botResponse(inputEscolhido.value)
    }
    
}


export {voltar, InputsAntigosDisponiveis}
export default InputDisponiveis
