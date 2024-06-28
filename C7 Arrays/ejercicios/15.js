function encontrarIndiceMayor(array) {
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
// Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
module.exports = encontrarIndiceMayor;
