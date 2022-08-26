
// CONSTANTES QUE ALMACENAN EL ID.
const
  trafficLight = document.querySelector('#traffic-light'),
      
  red = document.querySelector('#red'),

  green = document.querySelector('#green'),

  redButton = document.querySelector('#red-button'),

  greenButton = document.querySelector('#green-button'),
      
  cycleButton = document.querySelector('#cycle-button'),
      
  colorArray = [ 'red', 'green' ]
;

let cycleInterval;

// FUNCION QUE ACTIVAR EL COLOR ROJO
function LightRed(){

  clearIntervals();
  setCurrentActive('red');
}

// EJECUTAR FUNCION POR DEFECTO.
LightRed();

// FUNCION QUE ACTIVAR EL COLOR VERDE

function LightGreen(){

  clearIntervals();
  setCurrentActive('green');
}


// FUNCION QUE LIMPIA LOS INTERVALOS.
function clearIntervals() {
  clearInterval(cycleInterval);
}

// FUNCION PARA CAMBIAR EL ESTADO DE ACTIVO A INACTIVO.
function clearCurrentActive() {
  const activeElements = document.querySelectorAll('.active');
  
  for( let el of activeElements ) {
    el.classList.remove('active');
  }
}

// FUNCION QUE RECIBE POR PARAMETRO EL COLOR Y SE ACTIVA SEGUN
// EL TIPO DE COLOR RECIBIDO.
function setCurrentActive(color) {
  
  // LIMPIAR LOS COLORES ACTIVOS.
  clearCurrentActive();
  
  switch(color) {
    case 'red':
      red.classList.add('active');
      break;

    case 'green':
      green.classList.add('active');
      break;
    default:
      clearCurrentActive();
      break;
  }
}

