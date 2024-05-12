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