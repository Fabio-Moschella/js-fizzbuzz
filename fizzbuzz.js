// DATI
const multipliDi3 = "Fizz";
const multipliDi5 = "Buzz";
const multipli3E5 = "FizzBuzz";

// se l indice e` uguale a 1 e l indice e` minore di 0, l`indice aumenta di 1
for (let i = 1; i <= 100; i++) {
  //ed in console stampa i numeri da 1 a 100
  // se il numero e` multiplo sia di 3 che di 5
  if (i % 3 === 0 && i % 5 === 0) {
    // stampo FizzBUZZ
    console.log(multipli3E5);
  }
  // Se il numero è multiplo di 3
  else if (i % 3 === 0) {
    //   Stampo Fizz
    console.log(multipliDi3);
    // Se invece il numero è multiplo  di 5
  } else if (i % 5 === 0) {
    //   Stampo Buzz
    console.log(multipliDi5);
    // Altrimenti
  } else {
    //   Stampo i
    console.log(i);
  }
}
