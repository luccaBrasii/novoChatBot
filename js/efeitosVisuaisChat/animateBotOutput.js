
import { chatList, animationCounter} from "../index.js";

const animationBubbleDelay = 600


//CONTROLA A ANIMAÇÃO DAS BOLHAS DE CHAT PARA DAR UM VISUAL MELHOR..
function animateBotOutput() {
    
    chatList.lastElementChild.style.animationDelay= (animationCounter.value * animationBubbleDelay)+"ms";
    let valor = animationCounter.value
    valor ++
    animationCounter.value = valor;
    chatList.lastElementChild.style.animationPlayState = "running";
  }

export default animateBotOutput