'use strict'
// Pocas indicaciones nos sirven para aprender a programar de
// alguna manera, ya que nos fuerza a pensar más en una solución,
// a saber preguntar mejor que hacer y a ver (usar) otras 
// herramientas (interpretar los test) para ver lo que nos piden.
// Ejercicio 1: pasar un número binario a decimal.
// Como parámetro se recibe un string por parámetro pero debemos
// devolver un número.
// mejorar las indicaciones ¿?

function BinarioADecimal(num) {
  // tu codigo aca
    let resultado = 0
    let numero = num.split("") //                   3    2    1    0
    console.log("el splite hace:", numero) // --> ['0', '1', '0', '1'] <--.length 4
    // 0 * 2^3   +  1 * 2^2 + 0 * 2^1 + 1 * 2^0
    //    0      +    4     +    0    +  1 = 5
    let potenciaPos = numero.length - 1
    for (let i = 0; i < numero.length; i++) {
      resultado += numero[i] * Math.pow(2,potenciaPos);
      potenciaPos --
      console.log(resultado)
    }
    return resultado
    
  }

// BinarioADecimal(00001100) ---> retornar 432
// detallar la consigna
// Por parámetros nos llega un número pero debemos devolver un string
function DecimalABinario(num) {
  // tu codigo aca
  let numero = num
  let resultado = ""
  while (numero > 0) {
    resultado = numero % 2 + resultado
    numero = Math.floor(numero/2)
  }
  return resultado
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}