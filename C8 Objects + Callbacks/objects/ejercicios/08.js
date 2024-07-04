function crearGato(nombre, edad) {
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  };
  return gato;
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
}

module.exports = crearGato;
