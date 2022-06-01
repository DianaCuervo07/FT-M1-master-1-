'use strict'
// No cambies los nombres de las funciones.

// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
// Tu código:

function factorear(num) {//parámetro que se recibe
  let arr= [1];//siempre va haber uno en el array
  let contador = 2;//comineza dividirse en dos
  while(num !== 1){// sí es diferente a uno,ejecute lo siguiente.
    if(num % contador == 0){//si el numero es módulo de contador... 
    arr.push(contador);//empuja el contador al arreglo
    num = num / contador//el número se divide por el contador
    }else{ //sino
      contador++ //si ya nose puede dividir por ese numero, incrementa
    }
  }
  //console.log("factorear es", arr)
  return arr;//retorna
}
// factorear(180)


//bubblesort->ordena de menor a mayor, de izquierda a derecha --->

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 0; i < array.length; i++) {//itera hasta .length
  for (let j= 0; j< array.length-1-i; j++){//itera hasta i
    if(array[j]> array[j+1]){//compara el valor que esta en j con el siguiente
      [array[j], array[j+1]] = [array[j+1], array[j]]//desestructuración
    }
  }  

}
return array;
}
// let swap = true;
// while (swap){
//   swap= false
//   for (let i=0; i > array.length; i++){
//     if (array[i] > array[i+1]){
//       let aux = array[i]
//       array[i]=array[i+1]
//       array[i+1]= aux
//       swap = true
//     }
//   }
//console.log(array)
//   return array;
// }
//bubbleSort([5,1,4,2,8])

//ordena de menor a mayor de derecha a izquierda <---
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {//itera hasta .lenth
    for (let j= i; j > 0; j--){//itera hasta i
      if(array[j] < array[j-1]){//compara el valor que está en j-1
        [array[j], array[j-1]] = [array[j-1], array[j]]//desestructuración
      }
    }  
  
  }
  return array;
  
}
/*let aux;
for(let i=1; i< array.length; i++)
for (let j= i; j > array[j+1]){
  if (array[j] > array[j-1]){
  aux =array[j]
  array[j]= array[j-1]
  array[j-1]= aux
  }
 }
}
console.log("i",array)
return array;
}
insertionSort([5,1,4,2,8])
*/

//ordena los números de menor a mayor comenzando po el mínimo elemento.
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for (let i = 0; i < array.length; i++) {
    let minNumero = i;
    for (let j= i + 1; j < array.length; j++){
      if(array[j] < array[minNumero]) {
        minNumero= j;
      }
    }
    let aux = array[i];
    array[i] = array[minNumero];
    array[minNumero]= aux;
  }
     
  //console.log(array)
  return array
};
//selectionSort([5,1,4,2,8,3])



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
