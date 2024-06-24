function productoEntreNúmeros(a, b) {
  let iter=1
  for (let i = a ; i <= b; i ++){
    iter = i*iter
    if (a <= 0 || b <= 0 || iter <= 0){
      return 0
    }
  } 
  return iter
}
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:


module.exports = productoEntreNúmeros;