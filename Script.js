//* acá va el java //*
alert('Buenass ¿todo tranki? Espero que te guste mi página')
//document.getElementById("titulito").innerHTML = tip;
var tip = "Tip escondido: Llevar mucho abrigo para dormir a la noche ya que refresca mucho";
function solicitarNombre() {
 const nombre = prompt("Por favor, ingresa tu nombre:");
 if (nombre != ' ') {
    const mensajeBienvenida = document.createElement('div');
    mensajeBienvenida.id = 'mensaje-bienvenida';
    mensajeBienvenida.textContent = `¡Hola, ${nombre}! Bienvenido/a a ViajealSur.com`;
    document.body.insertBefore(mensajeBienvenida, document.body.firstChild);
  }
};
solicitarNombre();

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const distancia = parseFloat(document.getElementById('distancia').value);
  const consumo = parseFloat(document.getElementById('consumo').value);
  const precionafta = parseFloat(document.getElementById('precionafta').value);

  if (distancia < 0 || consumo < 0 || precionafta < 0) {
      showError("Por favor, asegúrate de ingresar valores mayores a cero para distancia, consumo y precio de la nafta.");
      return;
  }
  const costototal = (distancia / 100) * consumo * precionafta;

  const resultElement = document.getElementById('resultado');
  resultElement.innerHTML = `<p>El costo estimado del viaje es: $${costototal.toFixed(2)}</p>`;
});
function showError(message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error';
  errorElement.textContent = message;

  const container = document.querySelector('.cuadro');
  container.insertBefore(errorElement, container.firstChild);

  setTimeout(function() {
      errorElement.remove();
  }, 3000);
}