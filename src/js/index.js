// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.
const buttonElement = document.getElementById('button');

const showClick = () => {
  console.log(buttonElement.textContent);
};
buttonElement.addEventListener('click', showClick);
console.log('');

// Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const h1Element = document.getElementById('title');

const changeTitle = () => {
  h1Element.textContent = 'Quita de encima!!!';
};
const changeTitle2 = () => {
  h1Element.textContent = 'Soy un título';
};
h1Element.addEventListener('mouseover', changeTitle);
h1Element.addEventListener('mouseout', changeTitle2);

// Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.
const showWindowSize = () => {
  console.log(
    `El ancho de la pantalla es ${window.innerWidth} y el alto de la pantalla es ${window.innerHeight}.`
  );
};
window.addEventListener('resize', showWindowSize);

// Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
const pElement = document.getElementById('text');

const changePTextContent = event => {
  pElement.textContent = event.key;
};
window.addEventListener('keydown', changePTextContent);

// Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
const h2Element = document.getElementById('subtitle');
const buttonPreviusElement = document.getElementById('buttonPrevius');
const buttonNextElement = document.getElementById('buttonNext');
const arrayWords = ['pepe', 'casa', 'oso', 'bolsa', 'alfombra'];
h2Element.textContent = arrayWords[0];
let counter = 0;

const changeWordPrevius = () => {
  if (counter <= 0) {
    counter = arrayWords.length - 1;
  } else {
    counter--;
  }
  h2Element.textContent = arrayWords[counter];
};

const changeWordNext = () => {
  if (counter >= arrayWords.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  h2Element.textContent = arrayWords[counter];
};

// buttonPreviusElement.addEventListener('click', changeWordPrevius);
// buttonNextElement.addEventListener('click', changeWordNext);

// Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último
buttonPreviusElement.disabled = true;

const changeWordPreviusDisabled = () => {
  counter--;
  if (counter <= 0) {
    buttonPreviusElement.disabled = true;
  }
  buttonNextElement.disabled = false;

  h2Element.textContent = arrayWords[counter];
  console.log(counter);
};

const changeWordNextDisabled = () => {
  counter++;
  if (counter >= arrayWords.length - 1) {
    buttonNextElement.disabled = true;
  }
  buttonPreviusElement.disabled = false;

  h2Element.textContent = arrayWords[counter];
  console.log(counter);
};

buttonPreviusElement.addEventListener('click', changeWordPreviusDisabled);
buttonNextElement.addEventListener('click', changeWordNextDisabled);

// Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.
const labelElement = document.getElementById('label');
const rangeElement = document.getElementById('range');

const showRangeChange = () => {
  labelElement.textContent = rangeElement.value;
};

rangeElement.addEventListener('input', showRangeChange);

// Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.
const checkboxElements = document.querySelectorAll('#check');
const buttonChecksElement = document.getElementById('buttonChecks');

const showChecksText = () => {
  let counter = 0;
  checkboxElements.forEach(check => {
    if (check.checked) {
      counter++;
    }
    console.log(`${check.text}`);
    console.log(`${counter}`);
  });
};

buttonChecksElement.addEventListener('click', showChecksText);
