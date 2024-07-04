const contarPropiedades = (objeto) => {
  let count = 0;
  for (let prop in objeto) {
    if (objeto.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
};
module.exports = contarPropiedades;
