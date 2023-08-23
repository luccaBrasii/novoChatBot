import data from "../fetch.js";
const services = data.polls

import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";
import {InputDisponiveis} from "./inputInicial.js";
import {respostas} from "./respostas.js";
import { inputEscolhido } from "../../index.js";


var servicos = InputBase('services')


async function separaRespostas(input){

    var lista = []
    var novosInputs = []


    InputDisponiveis.value.forEach(inputsDisponiveis =>{
        if(input == inputsDisponiveis){

            inputEscolhido.value = input

            services.forEach(service => {
                const id = service.id;
                const departament = service.department.toString();
                
                    if(input == departament){
                        lista.push(service)
                        novosInputs.push(id)
                    }

                    servicos[departament] = function() {  
                        lista.forEach(service => {
                                responseText(`<strong>${service.id} - </strong>${service.title}<br>`);
                                commandReset(respostas, 3);
                                return;
                        })
                    }
            })
            
            InputDisponiveis.value = novosInputs
      
        }
    })    
}


export  {servicos, separaRespostas, InputDisponiveis}

