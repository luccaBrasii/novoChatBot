PARA ADICIONAR NOVAS RESPOSTAS AO CHAT:

1- Acessamos o arquivo: 'js/respostaChat/index.js'
2- Na classe 'Inputs' adicionamos uma propriedade, um objeto com uma key característica daquele passo, exemplo 'IPTU'.
3- Esse objeto sempre segue um padrão:

    3.1- NOME (KEY)
    3.2 - OPÇÃO QUE O USUARIO VAI DIGITAR EX: 1 / 2 / 3.
    3.3 - Função 'responseText()' que recebe uma propriedade que é a mensagem que o chatBot vai renderizar.
    3.4 - Depois dessa função adicionamos a lógica, uma requisição etc.
    3.5 - A função 'commandReset()' que tem a responsabilidade de resetar a animação visual do chat e definir o passo do USUARIO, 
          se o usuario for passar pra outro passo, colocamos como parametro o nome do objeto que queremos que o usuario tenha acesso, caso não vá mudar de passo
          o valor padrão do commandReset é 'inputInicial'.
    3.6 - Por último a função recebe um 'return'


(3.1)    IPTU = {
(3.2)            1 : function(){
(3.3)                responseText("Algo sobre iptu")
(3.4)                //LÓGICA AQUI
(3.5)                commandReset();
(3.6)                return
                }