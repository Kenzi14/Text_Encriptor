const  textArea = document.querySelector(".text-area");
const  Mensaje = document.querySelector(".mensaje");


// la letra "e" es convertida para "enter"
// la letra "i" es convertida para "imes"
// la letra "a" es convertida para "ai"
// la letra "o" es convertida para "ober"
// la letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
    Mensaje.style.backgroundImage = "none"
    
}



function encriptar(stringencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptada.includes(matrizCodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            alert("Texto Encriptado con éxito")

        }

    }
    return stringencriptada

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
    Mensaje.style.backgroundImage = "none"
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            alert("Texto Desencriptado con éxito")

        }

    }
    return stringDesencriptada  
}
function copiar(){
    Mensaje.select();
    navigator.clipboard.writeText(Mensaje.value)
    Mensaje.value = "";
    alert("Texto Copiado")
}