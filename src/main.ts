function avanzarTurno(): void {
  let turnoActual = document.getElementById("numero-turno");

  if (turnoActual !== null && turnoActual !== undefined) {
    const resultado = parseInt(turnoActual.innerHTML) + 1;

    turnoActual.innerHTML = `${resultado}`.padStart(2, "0");
  }
}

const botonAvance = document.getElementById("avance");
if (botonAvance !== null && botonAvance !== undefined) {
  botonAvance.addEventListener("click", avanzarTurno);
}

function retrocederTurno(): void {
  let turnoActual = document.getElementById("numero-turno");

  if (turnoActual !== null && turnoActual !== undefined) {
    let resultado = parseInt(turnoActual.innerHTML) - 1;

    if (parseInt(turnoActual.innerHTML) <= 0) {
      resultado = 0;
    }

    turnoActual.innerHTML = `${resultado}`.padStart(2, "0");
  }
}

const botonRetroceso = document.getElementById("retroceso");
if (botonRetroceso !== null && botonRetroceso !== undefined) {
  botonRetroceso.addEventListener("click", retrocederTurno);
}

function reiniciarTurno(): void {
  const resultado = 0;

  const turnoActual = document.getElementById("numero-turno");

  if (turnoActual !== null && turnoActual !== undefined) {
    turnoActual.innerHTML = `${resultado}`.padStart(2, "0");
  }
}

const botonReinicio = document.getElementById("reiniciar");
if (botonReinicio !== null && botonReinicio !== undefined) {
  botonReinicio.addEventListener("click", reiniciarTurno);
}

function seleccionarTurno(): void {
  const turnoSeleccionadoElement = document.getElementById("seleccionarturno");
  if (
    turnoSeleccionadoElement !== null &&
    turnoSeleccionadoElement !== undefined &&
    turnoSeleccionadoElement instanceof HTMLInputElement
  ) {
    const turnoSeleccionado = turnoSeleccionadoElement.value;
    let resultado = parseInt(turnoSeleccionado);

    if (parseInt(turnoSeleccionado) < 0) {
      resultado = 0;
    }
    if (isNaN(resultado)) {
      resultado = 0;
    }
    const turnoActual = document.getElementById("numero-turno");

    if (turnoActual !== null && turnoActual !== undefined) {
      turnoActual.innerHTML = `${resultado}`.padStart(2, "0");
    }
  }
}

const botonSeleccion = document.getElementById("seleccionar");
if (botonSeleccion !== null && botonSeleccion !== undefined) {
  botonSeleccion.addEventListener("click", seleccionarTurno);
}
