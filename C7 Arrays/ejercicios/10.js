function obtenerPrimerStringLargo(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i].length >= 5){
       if (typeof array[i] === "string") {
         return array[i];
         break;
       }
      }
    }
  }
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:


module.exports = obtenerPrimerStringLargo;
