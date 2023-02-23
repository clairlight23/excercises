console.log(10+15)
// Chapter1
//Task 1.1
// alert ("Я JavaScript!")

// Task 1
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

// for (let i = 2; (i <= 10) && (i % 2 === 0); ++i) alert(i); 

// 2.4.
/*let admin;
let name;
name  = "John";
admin = name;
alert (admin);*/

// 2.6
/*let userName = prompt("Как тебя зовут?", "");
alert(userName);*/

// 2.8.4
/*let a = prompt("Первое число?", "");
let b = prompt("Второе число?", "");
alert (+a + +b);*/

//2.10.2.
/*let officialName = prompt ('Какое "официальное" название JavaScript?', "");
if (officialName == "ECMAScript") {
alert ("Верно!");
} else {
alert ("Не знаете? ECMAScript!");
}*/

// 2.10.3.
/*let value = prompt ("Введите число" , "");
if (value > 0) {
alert ("1");
} else if (value < 0) {
  alert ("-1");
} else {
alert("0");
}*/

// 2.10.5.
/*let message;
let login = prompt("Who are you?", "");
message = (login == "Сотрудник") ? "Привет" :
(login == "Директор") ? "Здравствуйте" :
(login == "") ? "Нет логина" :
" ";*/

// 2.11.6.
/*let age;
if (age >=14 && age <= 90);*/

// 2.11.9.
/*let login_ = prompt ("Логин", "");
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
}*/

// 2.13.4
/*for (let i = 2; i <= 10; ++i) {
if (i % 2 === 0) {
alert(i); 
}
}*/

// 2.13.5
/*let i = 0;
while (i < 3) {
alert(`number ${i}!`);
i++;
}*/

// 2.13.6
/*let number = prompt("Введите число больше 100", "");
while (number <= 100) {
if (number === null) break; 
number = prompt("Введите снова Again", "");
}*/

//2.13.7 wrong
/*let i = 2;
let n = 1;
while ((i >= n) && (i < 10)) {
   
if ((i % n) && (n !== 1 && n !== i)) {
alert (i);
}
n++;
i++;
}*/

//Chapter "switch" (2.14)
//2.14.1
/*let browser = prompt("Browser?", "");

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (browser === "Chrome" 
  || browser === "Firefox" 
  || browser === "Safari" 
  || browser === "Opera") {
  alert ("Okay we support theses browsers too");
} else {
  alert ("We hope that this page looks ok!");
}*/


//2.14.2
/*const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;

case 1:
  alert("Вы ввели число 1");
    break;

case 2:
case 3:
  alert("вы ввели число 2, а может и 3");
    break;
}*/

/*let browser = prompt("Browser?", "");

if (browser === "Edge") {
  alert( "You've got the Edge!" );
} 
else if (browser === "Chrome" || "Firefox" || "Safari" || "Opera") { // Можно не писать каждый раз browser, но в задачнике они тоже писали каждый раз
  alert( 'Okay we support these browsers too' );
}
else {
  alert( 'We hope that this page looks ok!' );
}*/


//2.14.3

/*let n = 10;

label:
for (let i = 2; i <=n; i++) {
   for (let j = 2; j < i; j++) {
if (i % j == 0) continue label;
   }
   alert(i);
}*/

/*function showMessage(from, text) {

   from = '*' + from + '*'; 
 
   alert( from + ': ' + text );
 }
  
 showMessage("Аня", "Привет");*/

 /*function sum(a, b) {
   a + b;
 }

 let result = sum(1, 2);
alert( result );*/

/*function checkAge(age) {
   if (age >= 18) {
     return true;
   } else {
     return confirm('А родители разрешили?');
   }
 }*/

//let age = prompt('Сколько вам лет?');

/*if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}*/
 
 
/*function showMovie(age) {
   if ( !checkAge(age) ) {
     return;
   }
 
   alert( "Вам показывается кино" ); 
 }

showMovie();*/

//Chapter Functions 2.15

//2.15.2


/*function checkAge(age) {
  (age > 18) ? true : confirm('Родители разрешили?'); // в учебнике на этой строке еще стоит return хотя оператор и так возвращает значение и у меня работает и без него
}*/

/*function checkAge(age) {
 (age > 18) || confirm('Родители разрешили?'); // в учебнике на этой строке еще стоит return хотя оператор и так возвращает значение и у меня работает и без него
}*/

//checkAge(12);

//2.15.3

/*function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}*/

//2.15.4

/*function pow(x, n) {

  x = +prompt("Write down a number", "");
  n = +prompt("Write down a degree", "");
  
  let a = x;

  for (let i = 1; i < n; i++) {
   a = a * x;
  }

  alert (a);
}

pow();*/

//2.17

/*let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);*/

//Chapter 4. Objects

//4.1.1

/*let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

//4.1.2

/*function isEmpty(obj) {
  for (let key in obj) {
  return false;
  } 
  return true;
}


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

//4.1.4

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
sum += salaries[key];
}
alert(sum);*/

//OR

/*sum = function (obj) {
    let sum = 0;
    for (let key in salaries) {
    sum = sum + salaries[key];
    }
    return sum;
}

alert (sum (salaries));*/

//4.1.5
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2

/*function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2; 
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for (let key in menu) {
  alert(menu[key]);
}*/

// Chapter 4.4. Object Methods

//4.4.2

/*let calculator = {
 read() {
this.number1 = +prompt("number1", "");
this.number2 = +prompt("number2", "");
},

 sum() {
  let summ;
  summ = this.number1 + this.number2;
  return summ;
},

 mul() {
  let mult;
    mult = this.number1 * this.number2;
    return mult;
  }

};*/

/*calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

/*let calculator = {
  read() {
    this.number1 = +prompt("number1", "");
    this.number2 = +prompt("number2", "");
 },
 
  sum() {
    return this.number1 + this.number2;
  },
 
  mul() {
    return this.number1 * this.number2;
  }
};*/

//почему-то ответ undefined 
/*let calculator = {
  read() {
   this.number1 = prompt("number1", "");
   this.number2 = prompt("number2", "");
  },
 
  sum() {
    () => this.number1 + this.number2;
  },
 
  mul() {
   () => this.number1 * this.number2;
  }
}*/

/*calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

//почему-то ответ undefined 
/*let calculator = {
  number1: 20,
  number2: 50,
   
  sum() {
    () => this.number1 + this.number2;
  },
 
  mul() {
    () => this.number1 * this.number2;
  }
}*/

/*alert( calculator.sum() );
alert( calculator.mul() );*/

//4.4.3

/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};*/

//ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

//ladder.showStep().up().up().up().up().up().down().showStep().down().showStep();

//4.5.2

/*function Calculator () {
  this.read = function() {
    this.number1 = +prompt("number1", "");
    this.number2 = +prompt("number2", "");
};
  this.sum = function() {
    return this.number1 + this.number2;
  };
  this.mul =  function() {
    return this.number1 * this.number2
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

//4.5.3
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let number = +prompt("number?", "");
    this.value = this.value + number;
  };
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений