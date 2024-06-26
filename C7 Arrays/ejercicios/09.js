function obtenerElementoAleatorio(array) {
   var indiceAleatorio = Math.floor(Math.random() * array.length);
   return array[indiceAleatorio];
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
}

module.exports = obtenerElementoAleatorio;
