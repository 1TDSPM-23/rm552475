console.log("Olá Mundo");

//Comentario linha
        /*comentario bloco*/

        //declarar uma variavel com a palavra reservada var
        

        //Vamos imprimir as variaveis com o objto console
        /*console.log(nr1);
        console.log(nr2);
        //Realizando as operações básicas com estes valores

        //adição 
        //Realize a concatenação com o texto  resultado
        //Ex: console.log(RESULTADO nr1+nr2);
        console.log("RESULTADO ADIÇÃO: "+(nr1+nr2))
        console.log(`RESULTADO ADIÇÃO: ${parseInt(nr1)+parseInt(nr2)}`);

        //Subtração
        console.log("RESULTADO: "+(nr1-nr2))
        console.log(`RESULTADO SUBTRAÇÃO: ${parseInt(nr1)-parseInt(nr2)}`);

        //Multiplicação
        console.log("RESULTADO: "+(nr1*nr2))
        console.log(`RESULTADO MULTIPLICAÇÃO: ${parseInt(nr1)*parseInt(nr2)}`);

        //Divisão
        console.log("RESULTADO: "+(nr1/nr2))
        console.log(`RESULTADO DIVISÃO: ${parseInt(nr1)/parseInt(nr2)}`);
        
        //RESTO DA DIVISÃO
        console.log(`RESULTADO RESTO DIVISÃO: ${parseInt(nr1)%parseInt(nr2)}`);
        */
        /*
        //DESCOBRINDO SE UM NUMERO É PAR OU IMPAR
        //UTILIZANDO OPERADOR TERNÁRIO
        var nr1 =10;
        var nr2 =5;
        var resultado;

        resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
        console.log(`O NUMERO É : ${resultado}`)
        */

        //DIFERENÇA ENTRE VAR,LET E CONST

        
        //REGRAS DO CONST
        //1° REGRA: INICIALIZAR NA DECLARAÇÃO
        const nome3 = "Violante";
        //2° REGRA: NÃO PODE SER ALTERAR DURANTE O FLUXO DO PROGRAMA
        //nome3= "Jonathan"

        //obs sempre utilizar nomes maiusculos para as variaveis const
        const PI = 3.14;

        
        //var nome1 = "Beatriz";
        //let nome2 ="Mateus";

        var nome = "Beatriz"
        var nome2= ""
        if(nome != ""){
            let nome = "Robson"
            //PARA TIRAR A LET DO ESCOPO
            nome2 = nome
        }
        //QUAL O NOME QUE SERÁ IMPRESSO 
        console.log(nome)
        console.log(nome2)