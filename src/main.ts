import "./style.css";

function avanzarTurno(): void {
  const turnoActual = (document.getElementById("numero-turno") as HTMLElement)
    .innerHTML;

  const resultado = parseInt(turnoActual) + 1;

  const resultadoElement = document.getElementById("numero-turno");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString().padStart(2, "0");
  }
}

const botonAvance = document.getElementById("avance");
botonAvance?.addEventListener("click", avanzarTurno);

function retrocederTurno(): void {
  const turnoActual = (document.getElementById("numero-turno") as HTMLElement)
    .innerHTML;

  let resultado = parseInt(turnoActual) - 1;

  if (parseInt(turnoActual) - 1 <= 0) {
    resultado = 0;
  }

  const resultadoElement = document.getElementById("numero-turno");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultadoElement.innerHTML = resultado
      .toString()
      .padStart(2, "0");
  }
}

const botonRetroceso = document.getElementById("retroceso");
botonRetroceso?.addEventListener("click", retrocederTurno);

function reiniciarTurno(): void {
  const resultado = 0;

  const resultadoElement = document.getElementById("numero-turno");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString().padStart(2, "0");
  }
}

const botonReinicio = document.getElementById("reiniciar");
botonReinicio?.addEventListener("click", reiniciarTurno);

function seleccionarTurno(): void {
  const turnoSeleccionado = (
    document.getElementById("seleccionarturno") as HTMLInputElement
  ).value;
  let resultado = parseInt(turnoSeleccionado);

  if (parseInt(turnoSeleccionado) < 0) {
    resultado = 0;
  }
  if (isNaN(resultado)) {
    resultado = 0;
  }

  const resultadoElement = document.getElementById("numero-turno");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString().padStart(2, "0");
  }
}

const botonSeleccion = document.getElementById("seleccionar");
botonSeleccion?.addEventListener("click", seleccionarTurno);
