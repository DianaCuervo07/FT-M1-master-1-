'use strict'
// No cambies los nombres de las funciones.


  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function quickSort(array) {
    if(array.length <= 1){//para que no se vuelva un bucle infinito
      return array;
    }
    let igual = [];
    let left= [];
    let right = [];
    let pivote = array[Math.floor(Math.random() * array.length - 1)];
    for (let i = 0; i < array.length; i++) {
    //  
    if(array[i] !== pivote){
      if(array[i]> pivote){
        right.push(array[i])
      }else{
        left.push(array[i])
      }
    }
    else{
      igual.push(array[i])
    }
  }
  //return [ ...quickSort(left), ...igual, ...quickSort(right)]//spread operator ...
  return quickSort(left).concat(igual,quickSort(right))
}
console.log(quickSort([8,3,2,5,6,4]));



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if(array.length <= 1){
  return array;
}
let mitadValor = Math.floor(array.length /2);
let left = array.slice(0, mitadValor);
let right = array.slice(mitadValor);
return merge(mergeSort(left), mergeSort(right));
}
function merge(left,right){
  let result = [];//result
  let indexLeft= 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft]);
      indexLeft++;
    }
    else{
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
