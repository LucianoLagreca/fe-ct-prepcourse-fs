function tieneEmail(objetoUsuario) {
  if (objetoUsuario.email) {
    return true;
  } else {
    return false;
  }
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
}

module.exports = tieneEmail;
