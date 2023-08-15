class Inputs{}

import {inputInicial} from "../api/inputs/inputInicial.js"
import servicos from "../api/inputs/services.js";
import respostas from "../api/inputs/respostas.js";
const inputsChat = new Inputs

inputsChat.inputInicial = inputInicial
inputsChat.servicos = servicos
inputsChat.respostas = respostas


const mapeamentoValores = {
    1: inputsChat.servicos,
    2: inputsChat.servicos,
    'respostas': inputsChat.respostas,
    'O que é Lorem Ipsum?': inputsChat.respostas
};

export {mapeamentoValores}
export default inputsChat