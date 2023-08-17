import {animationCounter, busca} from "../index.js";
import { inputInicial } from "../api/inputs/inputInicial.js";

function commandReset(boleano = inputInicial){
    animationCounter.value = 1;
    busca.value = boleano

  }

export default commandReset