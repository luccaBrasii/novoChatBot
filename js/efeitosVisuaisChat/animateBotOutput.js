
import { chatList, animationCounter} from "../index.js";

const animationBubbleDelay = 600


//CONTROLA A ANIMAÇÃO DAS BOLHAS DE CHAT PARA DAR UM VISUAL MELHOR..
function animateBotOutput() {
    const lastBotOutputDiv = chatList.lastElementChild;

    if (lastBotOutputDiv && lastBotOutputDiv.classList.contains('botOutput')) {
      const liInsideDiv = lastBotOutputDiv.querySelector('li.bot__output');
      if (liInsideDiv) {
          
          liInsideDiv.style.animationDelay= (animationCounter.value * animationBubbleDelay)+"ms";
          liInsideDiv.style.animationPlayState = "running";
      }
    }

    lastBotOutputDiv.style.animationDelay= (animationCounter.value * animationBubbleDelay)+"ms";
    

    let valor = animationCounter.value
    valor ++
    animationCounter.value = valor;

    lastBotOutputDiv.style.animationPlayState = "running";
    
    
  }

export default animateBotOutput