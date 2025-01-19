console.log('task-1.js');
//todo Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

//todo Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//todo Усі символи slug повинні бути в нижньому регістрі.
//todo Усі слова slug повинні бути розділені тире.

// join("") - зшиє як зазначено в лапках: ("-") і т. д.
// split("")- розділить по буквах ; (" ")- по пробілах
// title.toLowerCase - приводить до нижнього регістра

function slugify(title) {
    return title.split(" ").join("-").toLowerCase(" ");
    
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

document.getElementById("task-1/1").innerHTML = slugify("Arrays for begginers"); // "arrays-for-begginers"
document.getElementById("task-1/2").innerHTML = slugify("English for developer"); // "english-for-developer"
document.getElementById("task-1/3").innerHTML = slugify("Ten secrets of JavaScript"); // "ten-secrets-of-javascript"
document.getElementById("task-1/4").innerHTML = slugify("How to become a JUNIOR developer in TWO WEEKS"); // "how-to-become-a-junior-developer-in-two-weeks"
