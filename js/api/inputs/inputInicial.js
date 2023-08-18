import data from "../fetch.js";
import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import InputBase from "./InputBase.js";
import {servicos} from "./services.js";

const services = data.services


const inputInicial = InputBase()
  

function separaServices(input){

    var lista = []

    services.forEach(service => {
        const id = service.id;
        const departament = service.department.toString();
        
            if(input == departament){
                lista.push(service)
            }
            
        inputInicial[id] = function() {
            lista.forEach(service => {
                    responseText(`<strong>${service.id} - </strong>${service.name}<br>`);
                    commandReset(servicos);
                    return;
                })
            }
        })
}


export {inputInicial, separaServices}
