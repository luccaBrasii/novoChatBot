import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";
import { voltar } from "../index.js";

function InputBase(parametro){
        
    return {
        ajuda: function() {
            responseText("Esses são os comandos que eu sei:");
            responseText(`
                <strong>ajuda-</strong>Mensagem de ajuda.<br>
                <strong>sair-</strong>Encerra o atendimento.<br>
            `);
            commandReset();
            return;
        },
        sair: function() {
            responseText('Adeus :)');
            responseText('Atendimento encerrado..');
            responseText(`<a href='#'>Clique aqui para voltar a tela inicial...</a>`);
            commandReset();
            return;
        },
        voltar: function() {
            responseText(`Voltando..`)
            console.log(parametro);
            voltar(parametro)
            return;
        }
    };
}

export default InputBase


