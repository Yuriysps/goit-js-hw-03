console.log('task-2.js');
//todo Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

//todo Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
//todo В іншому випадку функція повинна повернути весь новий масив.

// створюю змінну що зліпить 2 массива і if-ом порівнюю -  maxLength массив.lenght і лишнє відрізаєм (JavaScript Array slice()
// Метод slice()виділяє частину масиву на новий масив:)

// slice(0, maxLength ) 
//  [...someMassive,  ...anotherMassive] = newMassive ?
// newMassive = someMassive.concat(anotherMassive)

function makeArray(firstArray, secondArray, maxLength) {
    const fullArray = firstArray.concat(secondArray) ;

    if ( fullArray.length > maxLength ) {

        return fullArray.slice( 0, maxLength);

    } 
    else {

         return fullArray;
    }

}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

document.getElementById("task-2/1").innerHTML = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3); // ["Mango", "Poly", "Ajax"]
document.getElementById("task-2/2").innerHTML = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4); // ["Mango", "Poly", "Houston", "Ajax"]
document.getElementById("task-2/3").innerHTML = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3); // ["Mango", "Ajax", "Chelsea"]
document.getElementById("task-2/4").innerHTML = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2); // ["Earth", "Jupiter"]
document.getElementById("task-2/5").innerHTML = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
document.getElementById("task-2/6").innerHTML = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0); // []