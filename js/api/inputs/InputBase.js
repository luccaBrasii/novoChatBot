import responseText from "../../funcoesChat/responseText.js";
import commandReset from "../../funcoesChat/commandReset.js";

function InputBase(){

    return {
        ajuda: function() {
            responseText("Esses são os comandos que eu sei:");
            responseText(`
                <strong>[0 / sair ]-</strong>Encerra o atendimento<br>
                <strong>1-</strong>Dizer alguma frase!<br>
                <strong>ajuda-</strong>Mensagem de ajuda<br>
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
        0: function() {
            responseText('Atendimento encerrado..');
            responseText('Adeus :)');
            responseText(`<a href='#'>Clique aqui para voltar a tela inicial...</a>`);
            commandReset();
            return;
        },
    };
}

export default InputBase