
function encriptar() {
  var mensaje = document.getElementById('mensaje').value.toLowerCase();
  var resultado = encriptarTexto(mensaje);
  document.getElementById('resultado').value = resultado;
  // Mostrar el área de texto encriptado y ocultar la imagen
  document.getElementById('info').classList.add('hidden');
  document.getElementById('resultado').classList.remove('hidden');
  document.getElementById('copy').classList.remove('hidden');
}


function desencriptar() {
  var mensaje = document.getElementById('mensaje').value.toLowerCase();
  var resultado = desencriptarTexto(mensaje);
  document.getElementById('resultado').value = resultado;
}

function encriptarTexto(texto) {
  return texto.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
  return texto.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}
function copiarMensaje() {
  var resultado = document.getElementById('resultado').value;
  navigator.clipboard.writeText(resultado)
    .then(() => {
      alert('Mensaje copiado al portapapeles');
    })
    .catch(err => {
      console.error('No se pudo copiar el mensaje: ', err);
    });
}