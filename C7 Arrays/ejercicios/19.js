function multiplicarArgumentos() {
  if (arguments.length === 0) {
    return 0;
  }

  var producto = 1;
  var i = 0;
  while (i < arguments.length) {
    producto *= arguments[i];
    i++;
  }
  
  return producto;
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
}

module.exports = multiplicarArgumentos;
