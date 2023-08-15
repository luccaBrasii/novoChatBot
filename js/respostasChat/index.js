import responseText from "../funcoesChat/responseText.js";
import commandReset from "../funcoesChat/commandReset.js";

import {services, polls} from "../api/index.js"
console.log(polls) //.service
console.log(services)



class Inputs{}

import {inputInicial} from "../api/inputs/inputInicial.js"
import servicos from "../api/inputs/services.js";
import respostas from "../api/inputs/respostas.js";

const inputsChat = new Inputs

inputsChat.inputInicial = inputInicial
inputsChat.servicos = servicos
inputsChat.respostas = respostas

const mapeamentoValores = {
    'IPTU': inputsChat.servicos,
    'EMISSÃO DE ALVARÁ SANITÁRIO': inputsChat.servicos,
    'respostas': inputsChat.respostas,
    'O que é Lorem Ipsum?': inputsChat.respostas
};

export {mapeamentoValores}
export default inputsChat