function agregarNumeros(arrayOfNums) {
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
}

module.exports = agregarNumeros;
