let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    console.log (numbers[index]);
}

media = soma / numbers.length
console.log ("A soma total de todos os números do Array é: " + soma + "!");
console.log ("A média aritmética é: " + media + "!")
console.log ('==================');

if (media > 20) {
    console.log ("O valor é maior que 20");
} else {
    console.log ("O valor é menor ou igual a 20");
}

for (let index = 0; index < numbers.length; index += 1) {

}

let maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}

console.log ("O maior número dentro da Array é: " + maior + "!");

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }
}

if (impar === 0 ) {
    console.log ("nenhum valor ímpar encontrado");
} else {
    console.log ("Neste Array, temos " + impar + " números impares!");
}

let menor = numbers [0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}

console.log ("O menor número dentro da Array é : " + menor + "!");

let cont = [];
let division = [];

for (let index = 1; index <= 25; index += 1) {
    cont.push(index);
}
console.log (cont);

for (let index = 0; index < cont.length; index += 1) {
     console.log(cont[index] / 2);
  };