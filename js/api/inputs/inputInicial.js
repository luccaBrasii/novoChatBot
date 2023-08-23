import data from "../fetch.js";
import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";
import {servicos} from "./services.js";
import InputDisponiveis from "../index.js";
import { inputEscolhido } from "../../index.js";

const services = data.services

var inputInicial = InputBase('inicial')



function separaServices(input){
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
        
                inputInicial[id] = function() {
                    lista.forEach(service => {
                            responseText(`<strong>${service.id} - </strong>${service.name}<br>`);
                            commandReset(servicos,2);
                            return;
                    })
                }
              })
            
            InputDisponiveis.value = novosInputs

        }
    })
    
    

}


export {inputInicial, separaServices, InputDisponiveis}

