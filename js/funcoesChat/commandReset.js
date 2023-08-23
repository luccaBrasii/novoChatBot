import {animationCounter, busca} from "../index.js";
import { inputInicial } from "../api/inputs/inputInicial.js";
import { passo } from "../index.js";

function commandReset(input = inputInicial, numPasso = 1){
    animationCounter.value = 1;
    busca.value = input
    passo.value = numPasso
  }

export default commandReset