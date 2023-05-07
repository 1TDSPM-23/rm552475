var fundo = document.querySelector('body')
var list = document.querySelector('ul')
var formulario = document.querySelector('form')

var botaoRemove= document.querySelector("#btn-remover")
var botaoMsg = document.querySelector('#btn-mensagem')
var div = document.querySelector('#imagens')
var botaoImg= document.querySelector('#btn-imagem')
var botao= document.querySelector('#btn-background')
var enviar = document.querySelector('#enviar')
var entrada = document.querySelector('#entrada')


   

botao.addEventListener('click',function (){
    fundo.style.backgroundColor = 'blue'
})

formulario.addEventListener('click',function(){
    const texto = entrada.value.trim()
    const novoItem = document.createElement('li')
    novoItem.textContent = texto
    fundo.appendChild(novoItem)
    list.appendChild(novoItem)
    novoItem.innerHTML = texto
    
    list.style.listStyle = 'none'
})

botaoImg.addEventListener('click',function(){
    const imagem= document.createElement('img')
    div.innerHTML = "<img src ='../img/lobo1.jpg' whidth ='250px'>  "
})

botaoMsg.addEventListener('click',function(){
    const ElementoMsg = document.createElement('p')
    var msg = document.createTextNode("Mensagem inserida no elemento")
    ElementoMsg.appendChild(msg)
    fundo.appendChild(ElementoMsg)
})

botaoRemove.addEventListener('click',function(){
    fundo.removeChild(formulario)
})