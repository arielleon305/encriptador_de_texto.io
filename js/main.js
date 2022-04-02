//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

var botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEncriptado = encriptarTexto(leerTextoArea());
    escribirTexto(textoEncriptado);    
});

var botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();  
    alert("se presiono el boton desencriptar");
});

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();  
    alert("se presiono el boton copiar");
});

//copiar texto del textarea:

function leerTextoArea(){
    var copiarTexto = document.querySelector("#mensaje");
    return (copiarTexto.value);
}

function encriptarTexto(){
    var texto = leerTextoArea();

        
}

function escribirTexto(){

}