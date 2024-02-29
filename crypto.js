

function transformar() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var tipo = document.getElementById('tipo').value;
    var resultado = '';
    if (tipo === 'encriptar') {
      resultado = encriptarTexto(texto);
    } else {
      resultado = desencriptarTexto(texto);
    }
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

  function copiar() {
    var resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  }