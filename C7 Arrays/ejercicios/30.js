function encontrarElementoRepetido(numeros) {
    // Recorre el array de números
    for (let i = 0; i < numeros.length; i++) {
      // Si el índice actual no es igual al índice del primer elemento
      // o al índice del último elemento, entonces es repetido
      if (numeros.indexOf(numeros[i]) !== numeros.lastIndexOf(numeros[i])) {
        return numeros[i];
      }
    }
  
    // Si no se encuentra ningún número repetido, devuelve null
    return undefined;
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
}

module.exports = encontrarElementoRepetido;