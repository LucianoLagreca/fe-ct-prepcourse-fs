function encontrarPrimerMultiploDeN(n, secuencia) {
  let i = 0;
  while (i < secuencia.length) {
    if (secuencia[i] % n === 0) {
      return secuencia[i];
    }
    i++;
  }
  return undefined;
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
}

module.exports = encontrarPrimerMultiploDeN;