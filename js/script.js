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
       // const nome3 = "Violante";
        //2° REGRA: NÃO PODE SER ALTERAR DURANTE O FLUXO DO PROGRAMA
        //nome3= "Jonathan"

        //obs sempre utilizar nomes maiusculos para as variaveis const
       // const PI = 3.14;

        
        //var nome1 = "Beatriz";
        //let nome2 ="Mateus";

       // var nome = "Beatriz"
        // nome2= ""
        /*if(nome != ""){
            let nome = "Robson"
            //PARA TIRAR A LET DO ESCOPO
            nome2 = nome
       }*/
      /*  //QUAL O NOME QUE SERÁ IMPRESSO 
        console.log(nome)
        console.log(nome2)*/
       /*
        //ARRAY E SEU METODOS
       let frutas = ["Banana","maçã","morango","carambola","acerola","laranja"];
       //IMPRINDO ARRAY
       console.log(frutas)
       console.table(frutas)
       console.log(frutas[4])

       //ADICIONAR UM ITEM AO FINAL DO ARRAY COM O METODO PUSH(ITEM)
       frutas.push("melão")
       console.log(frutas)
       
       //ADICIONAR UM ITEM AO inicio DO ARRAY COM O METODO PUSH(ITEM)
       frutas.push("caju")
       console.log(frutas)

       //ADICIONAR UM ITEM AO inicio DO ARRAY COM O METODO PUSH(ITEM)
       frutas.pop()
       console.log(frutas)
       
       //ADICIONAR UM ITEM AO inicio DO ARRAY COM O METODO PUSH(ITEM)
       frutas.shift()
       console.log(frutas)

       //PARA LOCALIZAR UM ITEM DO ARRAY , UTILIZAMOS O METODO INDEXOF(ITEMNOME)
       /*let indice = frutas.indexOf("morango")
       console.log(frutas[indice])*/
       /*
       //apagando o item localizado no array
       let indice = frutas.indexOf("carambola")
       console.log("fruta q estava no indice antes da remoção: "+frutas[indice])
       frutas.splice(indice,1)//metodo utilizado para apagar o item desejado
       console.log("fruta q estava no indice depois da remoção: "+frutas[indice])

       frutas.forEach((fruta)=>{
        console.log("Olha ele: "+fruta)
       });*/

       //MANIPULANDO O INPUT DO FORM

       const inputUser = document.getElementById("idNm")
       console.log(inputUser.value)