/**
 * Вивчення JavaScript
 * Урок 10. Теми:
 * 	Функції:
 * 	    Визначення
 * 	    	Оголошення - function definition
 * 	    	Вираз функції - Function Expression
 * 	    Параметри та області видимости - parameters and scopes
 * 	    Вкладена область видимости - nested scope
 * 	    Стек викликів - call stack
 * 	    Замикання - Closure
 * 	    Функції і побічні ефекти
 *
 *
 * Щоб завантажити урок у Шелл:
 * Core.Load('../../lessons/10/l-10.js');
 *
 */

'use strict';

Core.Print('\nLesson 10 - Start');

var console = {
	log: function(arg) {
		Core.Print('LOG:', arg);
	}
};

//
// Визначення функції - Function definition
//

// Що таке функція?

// 1 - Це ізольований фрагмент коду, що має власне ім'я і може
// виконуватися окремо від іншого коду вашого застосунку.

// 2 - Це спеціальний об'єкт, який, на відміну від просто об'єктів, може
// виконуватися і повертати результат виконання.

// 3 - Це значення, яке, на відміну від простих значень, зберігає не просто якісь
// дані, а має внутрішню логіку для маніпулювання ними. Це значення так і зветься -
// функціональне значення, або значення-функція, або значення функції.

// - ВАЖЛИВО: не плутати значення-функції і значення, що повернула функція
// у результаті виклику.

//
// function
//

// Ключове слово function при використанні в якості виразу
// створити функціональне значення.

// А при використанні в оголошенні воно оголошує змінну
// і надає їй функцію в якості значення.

// Приклади:
// Створити функціональне значення (значення функції) f
var f = function(a) {
  console.log(a + 2);
};

// Оголосити g як функцію:
function g(a, b) {
  return a * b * 3.5;
}

// Ще приклад функції-виразу проти оголошення функції:

//
// Оголошення функції - Function declaration
//

function square(x) {
	return x * x;
}

//
// Функціональні вирази - Function Expression
//
// Тут функції є значеннями:
var square = function(x) {
	return x * x;
};

console.log(square(12));

// Відмінності між оголошенням функції та використанням функції-значення:

console.log(sq(4));  // Буде нормально працювати

function sq(x) {
	if ( typeof x === 'function') {
		console.log('Function is passed in: ', x);
		return 0;
	}
 	return x * x;
}

console.log(sq2(4)); // Буде помилка

var sq2 = function(x) {
 return x * x;
}


sq( function (y) {
	return 4;
} );




//
// Параметри та області видимости - parameters and scopes
//

// Ключовим аспектом в розумінні функцій є області видимости.
// Параметри і змінні, оголошені усередині функції є локальними для функції,
// тобто видимі тільки ізсередини самої функції і більше нізвідки.
// Вони повторно створюються кожного разу при виклику функції.

// Але функції, оголошені усередині іншої функції,
// мають доступ до локальної області видимості зовнішньої функції.

// Global x
var x = "outside";

var f1 = function() {
	var x = "inside f1";
	console.log("f1 scope: ", x);
};
f1();
console.log("global scope: ", x);
// → outside

var f2 = function() {
	x = "inside f2";
	console.log("f2 scope: ", x);
};
f2();
console.log("global scope: ", x);
// → inside f2


//
// Вкладена область видимости - nested scope
//

// Лексична видимість

var f3 = function() {
	var x;
	console.log('f3 scope, 1: ' + x); // undefined
	x = 'inside f3';
	console.log('f3 scope, 2: ' + x); // inside f3

	var f4 = function() {
		var x;
		console.log('f4 scope, 1: ' + x); // undefined
		x = 'inside f4';
		console.log('f4 scope, 2: ' + x); // inside f4
		var f5 = function(argument) {
			var x = 'inside f5';
			console.log('f5 scope, 1: ' + x); // inside f5
		}
		f5();
	}
	f4();
};
f3();




//
// Стек викликів - call stack
//
// ОБЕРЕЖНО: функції можуть безкінечно викликати одна одну!
function chicken() {
	return born();
}

function born() {
	return egg();
}

function egg() {
	return chicken();
}
console.log('Спершу була ' + chicken());



//
// Функція як об'єкт. Два наслідки:
//

// 1. Оскільки функції є об'єктами, то вони можуть зберігати значення на собі:

function name(a, b){
	/* code */
	var abc = 'abc';
	name.counter++;
	console.log('function name counter = ' +  name.counter);
	return abc;
}

name.counter = 0;

console.log(name.counter);

name();

// 2. А також їх можна створити за допомогою конструктора:

var name = new Function('a, b', '/* code */');

console.log(name());
console.log(name());
console.log(name());
console.log(name());

// Google XSS Game:
// https://xss-game.appspot.com/level1

//
// Замикання - Closure
//

function wrapValue(n) {
  var localVariable = n;
  return function() {
  	return localVariable;
  };
}

// отримуємо функцію:
var wrap1 = wrapValue(1);

// викликаємо функцію:
console.log(wrap1());

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
var wrap101 = wrapValue(101);

console.log('w1 = ' + wrap1());
console.log('w2 = ' + wrap2());
console.log('w101 = ' + wrap101());

// Ще один приклад використання замикання: "функція-помножувач" multiplier.
// Принцип дії: "помножувач" приймає у якості аргумента перший множник (factor),
// і повертає внутрішню функцію-"домножувач" multiplyBy, яка приймає у якості
// аргумента другий множник (number).

// Внутрішня функція-"домножувач" (multiplyBy), внаслідок лексичної видимости
// "бачить" змінні, оголошені у зовнішній функції multiplier, і тому може
// використовувати її параметр factor, бо він є змінною, оголошеною в функції
// multiplier

// Отже, внутрішня функція може взяти перший множник-параметр зовнішньої функції
// і, помноживши його на власний параметр number, повернути результат множення.

function multiplier(factor) {
	function multiplyBy(number) {
		return number * factor;
	};
	return multiplyBy;
}

var twice = multiplier(2);

// Принциповим є те, що функцію-домножувач можна використовувати багато разів
// для домножування змінної factor на будь-яке число. Наприклад, на число 2:

console.log(twice(5));  // 5 * 2
console.log(twice(10)); // 10 * 2
console.log(twice(3));  // 3 * 2

// Або на число 3:
var triple = multiplier(3);

console.log(triple(5));   // 5 * 3
console.log(triple(10));  // console.log(multiplier(3)(10));
console.log(triple(3));   // 3 * 3

// А можна множити два числа, не зберігаючи внутрішню функцію у змінній,
// а одразу викликаючи її з другим множником, як тут:
var fiveMultipliedBySeven = multiplier(5)(7);

console.log(fiveMultipliedBySeven);


/*
 * Дуже гарно розказано про функції:
 * http://eloquentjavascript.net/03_functions.html
 */



//
// Домашня робота:
//

Core.Print('\nLesson 10 - Homework');

// Будемо продовжувати роботу над студентом:

var student = {
	name: 'Petro',
	surname: 'Tymoshenko',
	email: 'p@igov.org.ua',
	address: 'Kyiv',
	birthdayDate: new Date(1986, 8, 24),
	getDaysToBirthday: function() {
		// TODO: look for best syntax
	},
	getInfo: function() {
		return this.name + ' ' + this.surname + ' ' + this.adress + ' ' + this.birthdayDate.toDateString();
	}
};

Core.Print('\nTask 10.1');
// (1 бал)
// Визначте двома способами (як функціональний вираз та як оголошення функції)
// функцію cube, що приймає один числовий параметр і повертає куб від цього числа.
// TODO: пишіть свій код тут:










Core.Print('\nTask 10.2');
// (2 бали)

// Спробуйте відповісти, не торкаючись комп'ютера: що виведе у консоль цей код?
// TODO: пишіть відповідь тут:

var global1 = 'global1';
var global2 = 'global2';

var function1 = function() {
	var global1 = 'LOCAL1';
	global2 = 'LOCAL2';
	console.log('log from function scope: \n', global1, '\n', global2);
};

function1();

console.log('log from global scope: \n', global1, '\n', global2);










Core.Print('\nTask 10.3');
// (2 бали)

// Перепишіть код з попереднього завдання таким чином, щоб _другий_ вивід
// з консолі показував LOCAL1 замість global1

// TODO: пишіть свій код тут:











Core.Print('\nTask 10.4');
// (2 бали)

// Перепишіть код з завдання 10.2 таким чином, щоб _другий_ вивід
// з консолі показував global2 замість LOCAL2

// TODO: пишіть свій код тут:









Core.Print('\nTask 10.5');
// (3 бали)

// Напишіть функцію insider, що знаходиться всередині функції blackBox і
// повертається як результат її виконання.
// Якщо викликати функцію insider, то вона повертає параметр hidden, який було
// передано функції blackBox.
// Напишіть код, який викликає blackBox, у якості параметра передаючи 'secre'

// TODO: пишіть свій код тут:








Core.Print('\nLesson 10 - Homework End');
