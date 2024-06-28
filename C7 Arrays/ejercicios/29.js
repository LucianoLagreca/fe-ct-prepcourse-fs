function encontrarNumeroFaltante(numeros) {
    // Verifica si el array está vacío
    if (numeros.length === 0) {
      return null;
    }
  
    // Encuentra el valor mínimo y máximo en el array
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
  
    // Calcula la suma esperada de la secuencia completa
    const sumaEsperada = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);
  
    // Calcula la suma actual de los números en el array
    const sumaActual = numeros.reduce((acc, num) => acc + num, 0);
  
    // Si la suma esperada es igual a la suma actual, no hay números faltantes
    if (sumaEsperada === sumaActual) {
      return null;
    }
  
    // Devuelve el número faltante
    return sumaEsperada - sumaActual;
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
}

module.exports = encontrarNumeroFaltante;