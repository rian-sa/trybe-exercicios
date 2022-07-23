// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial)

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let invert = "";

for (let index = 0; index < word.length; index += 1) {
    invert += word[word.length - 1 - index];
}

console.log (invert);

// 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].lenght > biggestWord.lenght) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.lenght; index += 1) {
  if (array[index].length < smallestWord.lenght) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
  biggestPrimeNumber = currentNumber
  }
}

console.log(biggestPrimeNumber)