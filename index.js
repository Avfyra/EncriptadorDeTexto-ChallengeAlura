const textarea = document.querySelector(".textoIngresado");
const resultado = document.querySelector(".mensajeFinal");
let mensajeDefault = document.getElementById("mensajeDefault");
let mensajeDefaultDos = document.getElementById("parrafo");
let muneco = document.getElementById("muneco");

function btnEncriptar() {
  const mensajeEncriptado = encirptar(textarea.value);
  resultado.value = mensajeEncriptado;
  textarea.value = "";
}

function encirptar(textoEncriptado) {
  let matEncriptacion = [["e", "enter"],["i", "imes"],["o", "ober"], ["a", "ai"], ["u", "ufat"]];
  textoEncriptado = textoEncriptado.toLowerCase();

  for(let i = 0; i < matEncriptacion.length; i++) {
    if(textoEncriptado.includes(matEncriptacion[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(matEncriptacion[i][0], matEncriptacion[i][1]);
      }
  }

  if (textoEncriptado !== '' && !/^[a-z\s_]+$/.test(textoEncriptado)) {
    mensajeDefault.innerHTML = "¡Error! Texto inválido";
    mensajeDefault.style.color = "Red";
    mensajeDefaultDos.textContent = "El texto no debe contener caracteres especiales";
    muneco.src = "./Imagenes/error.png";
    return textoEncriptado = "";
  } else {
    if(textoEncriptado.length != 0) {
      textoEncriptado.value = textoEncriptado;
        mensajeDefault.innerHTML = "Texto encriptado con éxito";
      mensajeDefault.style.color = "Green";
      mensajeDefaultDos.textContent = "";
      muneco.style.display = "none";
      }else {
        mensajeDefault.innerHTML = "Ningún texto fue encontrado";
        muneco.src = "./Imagenes/stop.jpg";
        mensajeDefault.style.color = "Red";
        mensajeDefaultDos.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      }
    }
    
  return textoEncriptado;
}

function btnDesencriptar() {
  const mensajeDesencriptado = desencriptar(textarea.value);
  resultado.value = mensajeDesencriptado;
  textarea.value = "";
}

function desencriptar(txtDesencriptado) {
  let muneco = document.getElementById("muneco");
  txtDesencriptado = txtDesencriptado.toLowerCase();
  
  txtDesencriptado = txtDesencriptado
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e");

  if (txtDesencriptado !== '' && !/^[a-z\s_]+$/.test(txtDesencriptado)) {
    mensajeDefault.innerHTML = "¡Error! Texto inválido";
    mensajeDefault.style.color = "Red";
    mensajeDefaultDos.textContent = "El texto no debe contener caracteres especiales";
    muneco.src = "./Imagenes/error.png";
    return txtDesencriptado = "";
  } else {
    if(txtDesencriptado.length != 0) {
      txtDesencriptado.value = txtDesencriptado;
      mensajeDefault.innerHTML = "Texto desencriptado con éxito";
      mensajeDefault.style.color = "Green";
      mensajeDefaultDos.textContent = "";
      muneco.style.display = "none";
    } else {
      mensajeDefault.innerHTML = "Ningún texto fue encontrado";
      mensajeDefault.style.color = "Red";
      muneco.src = "./Imagenes/stop.jpg";
      mensajeDefaultDos.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }
 
  return txtDesencriptado;
}

function copiar() {
  let txtResultado = resultado;

  txtResultado.select();
  txtResultado.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(txtResultado.value);
  
}
