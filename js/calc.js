function insereNumeroNoVisor(botao,visor){

    if(botao.value == "+" || botao.value =="-" || botao.value == "*" || botao.value =="/"){
        
        //Verificando o penultimo caractere do visor utlizando
        if(visor.value[visor.value.length-1] == "+"|| visor.value[visor.value.length-1] == "-"
        || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){

                visor.value.slice(1);
                
        }
        else{
            visor.value += botao.value
        }
    }else{
        visor.value += botao.value
    }       
        

}
const resultadoDasOperacoes =(visor) => {
    
    try{
        visor.value = eval(visor.value);
    }
    catch(error){
        
        //Verificando o penultimo caractere do visor utlizando
        if(visor.value[visor.value.length] == "+"|| visor.value[visor.value.length] == "-"
        || visor.value[visor.value.length] == "*" || visor.value[visor.value.length] == "/"){

            visor.value = visor.value.slice(visor.value.length-1);
                
        }
        else{
            visor.value.slice(1);
            
        }
    }
    
    //Utilizando a funcao eval(expressao) obs: transforma as Strings em op math

    //eval(visor).value;
    
    
}
function apagaNumero (botao,visor){
    if(botao.value == "X"){
        
        visor.value.remove(botao.value.length-1)
        
    }
}
