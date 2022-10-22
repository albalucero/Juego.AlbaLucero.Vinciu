let eleccionCompu = "";
let cantVictorias = 0;
let cantDerrotas = 0;
/*function contar() {
  let cantVictorias = 0;
  if (eleccion == true) {
    cantVictorias++;
  }
  document.getElement("texto-victorias")[0].textContent = cantVictorias;
}*/

function hacerJugada(eleccion) {
  eleccionCompu = getRandomInt(0, 2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function hacerJugada(eleccion) {
  eleccionCompu = getRandomInt(0, 2);
  switch (eleccion) {
    case 0:
      switch (eleccionCompu) {
        case 0:
          alert("Empate");
          break;
        case 1:
          alert("Perdiste");
          cantDerrotas++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
        case 2:
          alert("Ganaste");
          cantVictorias++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
      }
      break;
    default:
      break;
  }

  switch (eleccion) {
    case 1:
      switch (eleccionCompu) {
        case 0:
          alert("Ganaste");
          cantVictorias++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
        case 1:
          alert("Empate");
          break;
        case 2:
          alert("Perdiste");
          cantDerrotas++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
      }
      break;
    default:
      break;
  }
  switch (eleccion) {
    case 2:
      switch (eleccionCompu) {
        case 0:
          alert("Perdiste");
          cantDerrotas++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
        case 1:
          alert("Ganaste");
          cantVictorias++;
          document.getElementsByClassName("box2")[0].textContent =
            "Cantidad de victorias: " +
            cantVictorias +
            " " +
            "Cantidad de derrotas: " +
            cantDerrotas;
          break;
        case 2:
          alert("Empate");
          break;
      }
      break;
    default:
      break;
  }
  document.getElementById("rta").textContent =
    "La computadora eligió: " + eleccionCompu + "  Usted eligió: " + eleccion;
}

function cambioColor() {
  let box = document.querySelector(".box");
  box.classList.toggle("special");
  console.log(box);
}

function finalizar() {
  document.getElementById("pantalla1").classList.toggle("active");
  document.getElementById("pantalla2").classList.toggle("active");
  console.log(pantalla1);
}

function volver() {
  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", (_) => {
    location.reload();
  });
}
