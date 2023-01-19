console.log(10+15)
// Chapter1
//Task 1.1
// alert ("Я JavaScript!")

// Task 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

for (let i = 2; (i <= 10) && (i % 2 === 0); ++i) alert(i); 

// 2.4.
let admin;
let name;
name  = "John";
admin = name;
alert (admin);

// 2.6
let userName = prompt("Как тебя зовут?", "");
alert(userName);

// 2.8.4
let a = prompt("Первое число?", "");
let b = prompt("Второе число?", "");
alert (+a + +b);

//2.10.2.
let officialName = prompt ('Какое "официальное" название JavaScript?', "");
if (officialName == "ECMAScript") {
  alert ("Верно!");
} else {
  alert ("Не знаете? ECMAScript!");
}

// 2.10.3.
let value = prompt ("Введите число" , "");
if (value > 0) {
  alert ("1");
} else if (value < 0) {
  alert ("-1");
} else {
  alert("0");
}

// 2.10.5.
let message;
let login = prompt("Who are you?", "");
message = (login == "Сотрудник") ? "Привет" :
(login == "Директор") ? "Здравствуйте" :
(login == "") ? "Нет логина" :
" ";

// 2.11.6.
let age;
if (age >=14 && age <= 90);

// 2.11.9.
let login_ = prompt ("Логин", "");
if (login_ === "Админ") {
    let parole = prompt ("Пароль", "");
    if (parole === "Я главный") {
      alert("Здравствуйте!");
    } else if (parole == null || parole === "") {
       alert ("Отменено");
    } else {
      alert ("Неверный пароль");
    }
} else if (login_ === "" || login_ === null) {
  alert("Отменено");
} else {
 alert ("Я вас не знаю");
}

// 2.13.4
for (let i = 2; i <= 10; ++i) {
  if (i % 2 === 0) {
  alert(i); 
  }
}

// 2.13.5
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// 2.13.6
let number = prompt("Введите число больше 100", "");
while (number <= 100) {
if (number === null) break; 
number = prompt("Введите снова Again", "");
}




