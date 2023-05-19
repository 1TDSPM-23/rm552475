//Criando objetos direto

/*let usuario1 ={
   estrutura basica do objeto 
}*/
/*
let usuario1 ={
    nomeCompleto :"Enio Casper",
    nomeUsuario :"enio",
    senhaUsuario :"123456",
    ccUsuario :"sc"
}

let usuario2 ={
    nomeCompleto :"Danid Silva",
    nomeUsuario :"danid",
    senhaUsuario :"123456",
    ccUsuario :"rj"
}

usuario1 = usuario2;

console.log("Nome do Usuário : "+usuario1.nomeCompleto)

usuario1.nomeCompleto ="Lukas";
console.log("Nome do Usuário : "+usuario1.nomeCompleto)

usuario1["cpf"] = "12345678900"
console.log("CPF do Usuário : "+usuario1.cpf)
*/

//CRIANDO LISTA DE USUARIOS

//let listaDeUsuarios = [];
//listaDeUsuarios.push(usuario1)
//listaDeUsuarios.push(usuario2)

let listaDeUsuarios = [{
    nomeCompleto :"Enio Casper",
    nomeUsuario :"enio",
    senhaUsuario :"123456",
    ccUsuario :"sc"
},{
    nomeCompleto :"Danid Silva",
    nomeUsuario :"danid",
    senhaUsuario :"123456",
    ccUsuario :"rj"
},
{
    nomeCompleto :"Gerson Lima",
    nomeUsuario :"gege",
    senhaUsuario :"123456",
    ccUsuario :"sp"
},
{
    nomeCompleto :"Jorginho Lima",
    nomeUsuario :"jojo",
    senhaUsuario :"123456",
    ccUsuario :"rj"
},
{
    nomeCompleto :"Eduardo Biolante",
    nomeUsuario :"dudu",
    senhaUsuario :"123456",
    ccUsuario :"sp"
}
];

const formLogin = document.querySelector("form[name ='frm01']")

const msgStatus = document.querySelector("#msg")

const botaoSubmit= document.querySelector("#btnSubmit")

botaoSubmit.addEventListener("click", ()=>{
    formLogin.OnpreventDefault();

    const inputUser = document.querySelector("#idNm")
    const inputPass = document.querySelector("#idPass")
    const selCentroCusto = document.querySelector("#idCusto")

    //objeto usuario logado
    const usuarioLogado ={
        nomeUsuarioLogado :inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccUsuarioLogado : selCentroCusto.value
    }

    //Objeto usuario validado
    let usuarioValidado = {};
    


    if(usuarioLogado.nomeUsuarioLogado != "" 
    && usuarioLogado.senhaUsuarioLogado != "" 
    && usuarioLogado.ccUsuarioLogado != "0"){
        
        for(let x=0; x<listaDeUsuarios.length;x++){

            
            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario 
                && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario 
                && usuarioLogado.ccUsuarioLogado == listaDeUsuarios[x].ccUsuario){                    

                usuarioValidado = listaDeUsuarios[x];
                /*msgStatus.setAttribute("style", "color:#00ff00")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;*/
            }
            /*else{                
                msgStatus.setAttribute("style", "color:#ff0000")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;
            }*/
        }
    } 
    else{
        console.log("Existe algum campo sem preenchimento")
    }
    if(usuarioValidado != null){

        msgStatus.setAttribute("style", "color:#00ff00")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;

    }
    else{
        msgStatus.setAttribute("style", "color:#ff0000")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;
    }  
})

function validaFormularioCompleto(){

    formLogin.OnpreventDefault();

    const inputUser = document.querySelector("#idNm")
    const inputPass = document.querySelector("#idPass")
    const selCentroCusto = document.querySelector("#idCusto")

    //objeto usuario logado
    const usuarioLogado ={
        nomeUsuarioLogado :inputUser.value,
        senhaUsuarioLogado : inputPass.value,
        ccUsuarioLogado : selCentroCusto.value
    }

    //Objeto usuario validado
    let usuarioValidado = {};
    


    if(usuarioLogado.nomeUsuarioLogado != "" 
    && usuarioLogado.senhaUsuarioLogado != "" 
    && usuarioLogado.ccUsuarioLogado != "0"){
        
        for(let x=0; x<listaDeUsuarios.length;x++){

            
            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario 
                && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario 
                && usuarioLogado.ccUsuarioLogado == listaDeUsuarios[x].ccUsuario){                    

                usuarioValidado = listaDeUsuarios[x];
                msgStatus.setAttribute("style", "color:#00ff00")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;
            }
            /*else{                
                msgStatus.setAttribute("style", "color:#ff0000")
                msgStatus.innerHTML =`<span><strong>O usuário ${usuarioValidado.nomeCompleto} 
                Fez o login com Sucesso!! </strong></span>`;
            }*/

        }


    }  

        
    
    else{
        console.log("Existe algum campo sem preenchimento")
    }
}

//const form1 = document.querySelector("form[name='frm01']")

//form1.addEventListener("submit", ()=>{

    const inputUser = document.querySelector("idNm")
    const inputPass = document.querySelector("idPass")
    const selCusto = document.querySelector("idCusto")

    const labelUser = document.querySelector("label[for ='idNm']")
    const labelPass = document.querySelector("label[for ='idPass']")

    inputUser.addEventListener("keyup",()=>{

        if(inputUser.value.length<4){
            labelUser.setAttribute("style","color: red")
        }
        else{
            labelUser.setAttribute("style","color: green")
        }
    })
    
    inputPass.addEventListener("keyup",()=>{

        if(inputPass.value.length<5){
            labelPass.setAttribute("style","color: red")
        }
        else{
            labelPass.setAttribute("style","color: green")
        }
    })

    


//    let valida = false

//    valida=validaFormularioCompleto(inputUser,inputPass ,selCusto)

//    if(valida == true){

//        window.location.assign("../index.html")

//    }
//    else{
//        window.location.assign("../index.html")
//    }
//})