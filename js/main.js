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
    alert("Su texto ha sido encriptado");    
});

var botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoDesencriptado = desencriptarTexto(leerTextoArea());
    escribirTexto(textoDesencriptado); 
    alert("Su texto ha sido desencriptado");
});

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiarTexto();
    alert("El texto traducido ha sido copiado al portapapeles");
});


//Lee texto del input textarea:
function leerTextoArea(){
    var textoLeido = document.querySelector("#mensaje");
    return textoLeido.value;
}

//escribe el texto en el input text:
function escribirTexto(texto){
    document.querySelector("#traducido").value = "";
    document.querySelector("#traducido").value = texto;
}

function copiarTexto (){
    var contenido = document.getElementById("traducido");
    contenido.select();
    document.execCommand('copy');
}

function encriptarTexto(texto){
    var textoNormal = texto.split(''); //split permite convertir en array un string
    for (i = 0; i < textoNormal.length; i++) {
        if (textoNormal[i] == "e") {
            textoNormal.splice(i, 1, ("enter"));      //splice elemina elemento y reemplaza por el indicado
        }
        else if (textoNormal[i] == "i") {
            textoNormal.splice(i, 1, ("imes"));
        }
        else if (textoNormal[i] == "a") {
            textoNormal.splice(i, 1, ("ai"));
        }
        else if (textoNormal[i] == "o") {
            textoNormal.splice(i, 1, ("ober"));
        }
        else if (textoNormal[i] == "u") {
            textoNormal.splice(i, 1, ("ufat"));
        }
    }
    return textoNormal.join('');      
}

function desencriptarTexto(texto){
    var text = texto.split(''); //split permite convertir en array un string
    for (i = 0; i < text.length; i++) {
        if ((text[i]+text[i+1]+text[i+2]+text[i+3]+text[i+4]) == "enter") {
            text.splice(i, 5, ("e"));      //splice elemina elemento y reemplaza por el indicado
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "imes") {
            text.splice(i, 4, ("i"));
        }
        else if ((text[i]+text[i+1]) == "ai") {
            text.splice(i, 2, ("a"));
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "ober") {
            text.splice(i, 4, ("o"));
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "ufat") {
            text.splice(i, 4, ("u"));
        }
    }
    return text.join('');      
}




