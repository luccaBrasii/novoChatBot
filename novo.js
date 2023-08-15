class Inputs2{
    //IPTU
        SEFIN = {
            1 : function(){
                polls.forEach((questoes) => {
                    if(questoes.service === 'IPTU')
                        responseText(`<strong>${questoes.id} - </strong>${questoes.title}<br>`)  
                })
                //
                //
                commandReset('questoes_SEFIN');
                return
            }
        }
        questoes_SEFIN = {
            1 : function(){
                polls.forEach((questoes) => {
                    if(questoes.id === 1)
                        responseText(`${questoes.answer}`)  
                })
                //
                //
                commandReset();
                return
            }
        }
    }

    import inputInicial from './teste.js'
    
    const inputsChat = new Inputs2
    
    inputsChat.inputInicial = inputInicial
    console.log(inputsChat)