import data from "../fetch.js";
const services = data.polls

import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";
import {InputDisponiveis} from "./services.js";
import { inputEscolhido } from "../../index.js";
import InputFinal from "./InputFinal.js";

var respostas = InputBase('voltaService')


function separaAnswer(input){
    var lista = []
    

    InputDisponiveis.value.forEach(inputsDisponiveis =>{
        if(input == inputsDisponiveis){

            inputEscolhido.value = input

            services.forEach(service => {
                const id = service.id;
                const departament = service.department.toString();
                
                if(input == id){
                    lista.push(service)
                }
        
                respostas[id] = function() {
                    lista.forEach(service => {
                            responseText(`<p>${service.answer}</p>`);
                            responseText(`Para encerrar o atendimento digite: sair`)
                            commandReset(InputFinal, undefined);
                    })
                }        
            })
            
        }

    })
    

        
}


export  {respostas,separaAnswer}