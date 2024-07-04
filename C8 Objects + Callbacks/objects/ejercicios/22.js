function esAnagrama(str1, str2) {
     // Verificar si las longitudes son diferentes
  if (str1.length !== str2.length) {
   return false;
 }

 // Función para normalizar el caso de las cadenas (convertir a minúsculas)
 function normalizeString(str) {
   return str.toLowerCase();
 }

 // Convertir ambas cadenas a minúsculas para comparar
 const normalizedStr1 = normalizeString(str1);
 const normalizedStr2 = normalizeString(str2);

 // Ordenar las cadenas normalizadas y luego compararlas
 return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');

   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
}

module.exports = esAnagrama;
