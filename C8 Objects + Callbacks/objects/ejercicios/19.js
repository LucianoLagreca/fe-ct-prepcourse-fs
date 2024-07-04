function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  for (let usuario of objetoMuchosUsuarios) {
    // Establecer la propiedad "esPremium" como true para cada usuario
    usuario.esPremium = true;
  }
  
  // Retornar el arreglo modificado
  return objetoMuchosUsuarios;
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
}

module.exports = pasarUsuarioAPremium;
