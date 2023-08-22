import data from "../fetch.js";
const services = data.polls


import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";


var respostas = InputBase()

function separaAnswer(input){

    var lista = []

    services.forEach(service => {
        const id = service.id;
        const departament = service.department.toString();
        
        if(input == id){
            lista.push(service)
        }

        respostas[id] = function() {
            lista.forEach(service => {
                    responseText(`<p>${service.answer}</p>`);
                    commandReset();
                    return;
            })
        }
            
            
        })

        
}


export  {respostas,separaAnswer}