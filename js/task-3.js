console.log('task-3.js');
//todo Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив  ---| лише тих чисел |---із масиву numbers, які більші за значення value.

//todo Усередині функції:

//todo Створи порожній масив, у який будеш додавати підходящі числа.
//todo Використай цикл для ітерації кожного елемента масиву numbers.
//todo Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
//todo Поверни свій новий масив з підходящими числами як результат.

//! The filter() method creates a new array filled with elements that pass a test provided by a function.

//! The filter() method does not execute the function for empty elements.

//! The filter() method does not change the original array.

function filterArray(numbers, value) {

const newStringArray = [];
    for (let i = 0; i < numbers.length; i++) {
  
          if (numbers[i] > value){
              newStringArray.push(numbers[i])
          } 
          
          
      

    }
    return newStringArray;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]




// document.getElementById("task-3/1").innerHTML = 

document.getElementById("task-3/1").innerHTML = filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
document.getElementById("task-3/2").innerHTML = filterArray([1, 2, 3, 4, 5], 4); // [5]
document.getElementById("task-3/3").innerHTML = filterArray([1, 2, 3, 4, 5], 5); // []
document.getElementById("task-3/4").innerHTML = filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
document.getElementById("task-3/5").innerHTML = filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]






