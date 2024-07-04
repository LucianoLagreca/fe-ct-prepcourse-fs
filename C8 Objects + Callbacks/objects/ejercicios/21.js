function agregarMetodoCalculoDescuento(objetoProducto) {
  objetoProducto.calcularPrecioDescuento = function() {
    // Multiplicar el precio por el porcentaje de descuento para obtener el descuento
    const descuento = this.precio * this.porcentajeDeDescuento;
    // Restar el descuento del precio original
    return this.precio - descuento;
  };
  return objetoProducto;
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
}

module.exports = agregarMetodoCalculoDescuento;
