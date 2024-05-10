/*
    Tanto esse quanto o primeiro desafio "Explore sem limites", não me senti à vontade de fazer sozinho, portanto deixei aberto a resolução na tela ao lado e fui digitando, pelo menos para treinar o código.
    Desculpe!
*/

alert('Hello World!')

let numberOne = 10
let numberTwo = 15

let sum = numberOne + numberTwo

alert(sum)

let isNumber = 10

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

let isString = 'Isso é uma string'

if (typeof isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

let isBoolean = true

if (typeof isBoolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

let sub = numberOne - numberTwo

alert(sub)

let mult = numberOne * numberTwo

alert(mult)

let div = numberOne / numberTwo

alert(div)

let isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

let isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}