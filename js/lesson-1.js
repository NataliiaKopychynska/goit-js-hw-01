/* duza ilosc kodu w 1 comencie
console.log('title');
console.log(5 + 7);
*/

/*
let name = 5;
let str = '10';
let boolen = true || false;
*/

/*
let a = 5;
console.log(a++);
// 5
console.log(a);
// jezeli wpisujemy jeszcze raz zminu a to juz mamy 6
let b = 4;
console.log(++b);
//5 pokazuje odrazu
let c = 4;
console.log(--c);
//3
*/

//!METOD;
let str = 'Hello';

/*
console.log(str.length);
console.log(str[str.length - 1]);
// dwugoszcz lub znalezenia litery
*/

/*
//rozdziela słowa i pokazuję tylko te w jakim diapozonie indeksowym są
console.log(str.slice(1, 2));

console.log(str.toLowerCase());
// z małymi literami

console.log(str.toUpperCase());
// z duymi literami
*/

const text = '  HeLlo  ';
// console.log(text.trim());
// .trim() usuwa spacji

// console.log(text.toLowerCase().trim());
//moemy zapisywać w jednym wierszu durzo  metodow przez .

console.log(text.toUpperCase().trim()[0] + text.toLowerCase().trim().slice(1));
// Hello - robimy pierwszą litere duą a ine mawe + zabieramy spacje

//! the boolen metid danych true|| false
/*
// and/i
console.log(true && true);
// true
console.log((true && false) || (false && true) || (false && false));
// false false false
*/

// !true - oznacza nie true czyli false
/*
const c = 8;
console.log(`Text 
on new line ${c}`);
// `` or "\n"
console.log('Text\non new line ' + c);
*/

//! MATH  Math.

console.log(Math.random());
//0.012973219377241163 (wybiera od 0 do 1)

console.log(Math.max(1, 5, 6, 3, 8, 3));
//8 (wybiera najwienksze)

console.log(Math.pow(4, 3));
//64 podnisienia do korenju

console.log(Math.pow(4, 0.5));
//or
console.log(Math.sqrt(4));
// 2 wyczyslenia koreniu

console.log(Math.floor(4.444));
// do 4
console.log(Math.ceil(4.444));
// do 5
console.log(Math.round(4.444));
console.log(Math.round(4.644));
// 1- 4 2-5

console.log(Math.trunc(4.444));
// okrongla do cawośći 4

console.log((67.777).toFixed(2));
// okrągla do 67.77

//! z "5" robimy 5 9DODAJEMY + PRZED
let d = '5';
console.log(+d + 5);

//! macywy
let arr = [5, 2, 'Street', true];
/* 0: 5
   1: 2
   2: "Street"
   3: true 
   lenght: 4

   ми можемо додати 4 масив:
   arr[4] = 7
   let arr = [5, 2, 'Street', true, 7];

   Mожемо звернутись до масиву 
   */

//! можемо створити масив в масиві
let matrix = [
  [1, 2, 4],
  [4, 6, 3],
];
// кожен масив має свій індекс і кожен індекс можна розвернути і побачити індекси вкладеного масиву
// щоб отримати індекс з вкладеного масиву: перший індекс це індекс вкладеного масиву а другий це індекс числа, значення в вкладеному масиві
matrix[1][2];

// за допомоги arr[arr.length-1] ми можемо отримати останій елемент в масиві

// !черга
// usuwamy pierwszy indeks
arr.shift(); //wybieramy pirwszyj index w masywie 5 --> i dalej kiedy wpiszemy nasz maszyw w console to juź w nim nie będę pokazywany pierwszy indeks
//arr [2, 'Street', true ]

// dodajemy ostatni indeks
arr.push(8);
// arr [2, 'Street', true, 8 ]

/* 1
let i = 1;
let sum;
while (number > i) {
  sum = number + i;
}
 */

/*2
function calculateTotal(number) {
  for (let i = 1; number >= i; i++) {
    return i;
  }
}
  */

function calculateEvenTotal(number) {
  let sum;
  for (let i; i <= number; i++) {
    i % 2 === 0;
    sum = number + i;
    return sum;
  }
}
