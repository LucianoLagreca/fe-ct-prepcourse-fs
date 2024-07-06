/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
//1
function deObjetoAarray(objeto) {
  //-- Crear un arreglo vacío para almacenar los pares clave-valor--
  let resultado = [];

  // --Iterar sobre las propiedades del objeto--
  for (let clave in objeto) {
    //-- Asegurarse de que la propiedad es propia del objeto, no heredada--
    if (objeto.hasOwnProperty(clave)) {
      //-- Agregar un nuevo arreglo con la clave y el valor al arreglo resultado--
      resultado.push([clave, objeto[clave]]);
    }
  }

  return resultado;
  
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
}
//2
function numberOfCharacters(string) {
  // Usamos un Map para contar las ocurrencias de cada carácter
  const charCount = new Map();
  [...string].forEach(char => {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });

  // Ordenamos las claves del Map y construimos un objeto resultado
  const sortedCharCount = {};
  Array.from(charCount.keys()).sort().forEach(key => {
    sortedCharCount[key] = charCount.get(key);
  });

  return sortedCharCount;

  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código: 
}
//3
function capToFront(string) {
  const uppercaseLetters = [];
  const lowercaseLetters = [];

  // Separar letras mayúsculas y minúsculas
  for (let char of string) {
    if (char === char.toUpperCase()) {
      uppercaseLetters.push(char);
    } else {
      lowercaseLetters.push(char);
    }
  }

  // Unir las letras mayúsculas seguidas de las minúsculas
  return uppercaseLetters.join('') + lowercaseLetters.join('');

  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
}
//4
function asAmirror(frase) {
   // Dividir la frase en palabras separadas por espacios
   const palabras = frase.split(' ');

   // Invertir cada palabra
   const palabrasInvertidas = palabras.map(palabra => {
     return palabra.split('').reverse().join('');
   });
 
   // Unir las palabras invertidas en un nuevo string
   const fraseInvertida = palabrasInvertidas.join(' ');
 
   return fraseInvertida;

  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
}
//5
function capicua(numero) {
  const numeroStr = numero.toString();

  // Comparar el número con su versión invertida
  if (numeroStr === numeroStr.split('').reverse().join('')) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }

  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}
//6
function deleteAbc(string) {
   // Convertir la cadena en un array de caracteres
   const chars = string.split('');

   // Eliminar las letras 'a', 'b' y 'c' del array
   for (let i = 0; i < chars.length; i++) {
     if (chars[i] === 'a' || chars[i] === 'b' || chars[i] === 'c') {
       delete chars[i];
     }
   }
 
   // Unir el array de caracteres de nuevo en una cadena y eliminar elementos vacíos
   const result = chars.join('').replace(/\s+/g, '');
 
   return result;

  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
}
//7
function sortArray(arrayOfStrings) {
    // Utilizamos el método sort con una función de comparación basada en la longitud de los strings
    const sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);
    return sortedArray;
  
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}
//8
function buscoInterseccion(array1, array2) {
    // Utilizamos un set para almacenar los elementos únicos de array1
    const set1 = new Set(array1);
  
    // Filtramos array2 para obtener solo los elementos que están en set1
    const intersection = array2.filter(element => set1.has(element));
    
    return intersection;
  
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
