import data from "../fetch.js";
const services = data.polls

import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";

import {respostas} from "./respostas.js";

var servicos = InputBase()


function separaRespostas(input){
    
    var lista = []

    
    services.forEach(service => {
        const id = service.id;
        const departament = service.department.toString();
        
            if(input == departament){
                lista.push(service)
            }
            
            
            servicos[departament] = function() {  
                lista.forEach(service => {
                        responseText(`<strong>${service.id} - </strong>${service.title}<br>`);
                        commandReset(respostas);
                        return;
                })
        }
        

        })

        
         

        
}


export  {servicos, separaRespostas}