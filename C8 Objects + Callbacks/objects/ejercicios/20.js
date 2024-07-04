function sumarLikesDeUsuario(objetoUsuario) {
  let totalLikes = 0;

  // Verificar si el objetoUsuario tiene la propiedad "posts" y es un arreglo
  if (objetoUsuario.hasOwnProperty('posts') && Array.isArray(objetoUsuario.posts)) {
    // Iterar sobre cada post y sumar los likes
    for (let i = 0; i < objetoUsuario.posts.length; i++) {
      totalLikes += objetoUsuario.posts[i].likes;
    }
  }

  return totalLikes;
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
}

module.exports = sumarLikesDeUsuario;
