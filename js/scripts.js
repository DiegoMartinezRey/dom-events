// - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.

const buttonElement = document.getElementById("button-click");

buttonElement.addEventListener("click", () => {
  console.log(buttonElement.textContent);
});

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1HoverElement = document.getElementById("h1-hover");

h1HoverElement.addEventListener("mouseover", () => {
  h1HoverElement.textContent = "Quita de encima!!!";
});
h1HoverElement.addEventListener("mouseleave", () => {
  h1HoverElement.textContent = "Soy un título ";
});

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const getKey = document.getElementById("button-key");

document.addEventListener("keydown", (e) => {
  getKey.textContent = `has pulsado la tecla ${e.key}`;
  if (e.altKey || e.ctrlKey || e.shiftKey) {
    e.altKey ? (getKey.textContent += " + alt") : "";
    e.ctrlKey ? (getKey.textContent += " + ctrl") : "";
    e.shiftKey ? (getKey.textContent += " + shift") : "";
  }
});
document.addEventListener("keyup", () => {
  getKey.textContent = `esperando entrada de teclado...`;
});

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const textElement = document.getElementById("change-text");
const previousElement = document.getElementById("previous-button");
const nextElement = document.getElementById("next-button");

const text = ["Hola", "Adios", "Carro", "Telefono", "Computador"];
let counter = 0;

previousElement.addEventListener("click", () => {
  if (counter === 0) {
    counter = 4;
  } else {
    counter--;
  }
  textElement.textContent = text[counter];
});
nextElement.addEventListener("click", () => {
  if (counter === 4) {
    counter = 0;
  } else {
    counter++;
  }
  textElement.textContent = text[counter];
});
