function validaFormularioCompleto(inputUser,inputPass ,selCentroCusto){
    if(inputUser.value != "" && inputPass.value != "" && selCentroCusto != 0){
        
        return true 
    }
    else{
        return false
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

        if(inputUser.value.length<5){
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