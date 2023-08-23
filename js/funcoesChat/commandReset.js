import {animationCounter, busca} from "../index.js";
import { inputInicial } from "../api/inputs/inputInicial.js";
import { passo } from "../index.js";
import  InputDisponiveis  from "../api/index.js";
import { InputsAntigosDisponiveis } from "../api/index.js";


function commandReset(input = inputInicial, numPasso = 1){
    animationCounter.value = 1;
    busca.value = input
    passo.value = numPasso

    console.log('BUSCA: ',busca);
    console.log('PASSO: ', passo)
    console.log('DISPONIVEIS: ', InputDisponiveis.value);
    console.log('ANTIGOS: ', InputsAntigosDisponiveis.value);
  }

function resetaInputsDisponiveis(novaLista){
  console.log('NOVA LISTA: ', novaLista);
  return InputDisponiveis.value = novaLista
}

export {resetaInputsDisponiveis}
export default commandReset