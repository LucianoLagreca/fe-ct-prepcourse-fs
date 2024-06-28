function esPalindromo(string) {
  // Convierte el string a minúsculas y elimina espacios en blanco
  const textoProcesado = string.toLowerCase().replace(/\s/g, '');
  
  // Invierte el string procesado y compara con el original
  const textoInvertido = textoProcesado.split('').reverse().join('');
  
  // Compara el texto original con el invertido para verificar si es palíndromo
  return textoProcesado === textoInvertido;
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
}

module.exports = esPalindromo;