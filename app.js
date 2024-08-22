// variables principales:
const textareaPrincipal = document.getElementById('textoPrincipal');
const textareaResultado = document.getElementById('textoResultado');
const formatoVerificacion = /^[,.a-zñ\s]*$/;

//funcion para encriptar texto (y sus validaciones)
function encriptar(){
    let texto = textareaPrincipal.value;
    if(texto != ""){
        if(formatoVerificacion.test(texto)){
            document.getElementById("infoError").style.cssText = "color: #023e8a; text-transform: none;";
            document.getElementById("resultadoImagen").style.display="none";
            textareaResultado.style.display="block";
            document.getElementById("copiar").style.display="block";
            document.getElementById("tituloResultado").innerHTML = "Listo!";
            let e = texto.replaceAll('e','enter');
            let i = e.replaceAll('i','imes');
            let a = i.replaceAll('a','ai');
            let o = a.replaceAll('o','ober');
            let u = o.replaceAll('u','ufat');
            textareaResultado.value = u;
            textareaPrincipal.value = "";
        }else{
            textareaPrincipal.value = "";
            document.getElementById("resultadoImagen").style.display="block";
            textareaResultado.style.display="none";
            document.getElementById("copiar").style.display="none";
            document.getElementById("tituloResultado").innerHTML = "Tu mensaje no puede ser encriptado; verificalo por favor.";
            document.getElementById("infoError").style.cssText = "color: #e20000; font-weight: bold; text-transform: uppercase;";
        }
    }else{
        document.getElementById("infoError").style.cssText = "color: #023e8a; text-transform: none; text-decoration: underline;";
        document.getElementById("resultadoImagen").style.display="block";
        textareaResultado.style.display="none";
        document.getElementById("copiar").style.display="none";
        document.getElementById("tituloResultado").innerHTML = "Debes escribir algo para encriptar.";
    }
    return;
}

//funcion para desencriptar texto (y sus validaciones)
function desencriptar(){
    let texto = textareaPrincipal.value;
    if(texto != ""){
        if(formatoVerificacion.test(texto)){
            document.getElementById("infoError").style.cssText = "color: #023e8a; text-transform: none;";
            document.getElementById("resultadoImagen").style.display="none";
            textareaResultado.style.display="block";
            document.getElementById("copiar").style.display="block";
            document.getElementById("tituloResultado").innerHTML = "Listo!";
            let ai = texto.replaceAll('ai','a');
            let enter = ai.replaceAll('enter','e');
            let imes = enter.replaceAll('imes','i');
            let ober = imes.replaceAll('ober','o');
            let ufat = ober.replaceAll('ufat','u');
            textareaResultado.value = ufat;
            textareaPrincipal.value = "";
        }else{
            textareaPrincipal.value = "";
            document.getElementById("resultadoImagen").style.display="block";
            textareaResultado.style.display="none";
            document.getElementById("copiar").style.display="none";
            document.getElementById("tituloResultado").innerHTML = "Tu mensaje no puede ser desencriptado; verificalo por favor.";
            document.getElementById("infoError").style.cssText = "color: #e20000; font-weight: bold; text-transform: uppercase;";
        }
    }else{
        document.getElementById("infoError").style.cssText = "color: #023e8a; text-transform: none;  text-decoration: underline;";
        document.getElementById("resultadoImagen").style.display="block";
        textareaResultado.style.display="none";
        document.getElementById("copiar").style.display="none";
        document.getElementById("tituloResultado").innerHTML = "Debes escribir algo para desencriptar.";
    }
    return;
}

function copiar(){
    let texto = textareaResultado.value;
    navigator.clipboard.writeText(texto);
    return;
}
