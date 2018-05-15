/** 
 * Вивчення JavaScript
 * Урок 7. Теми: 
 * - Інструкції (Statements)
 * - Масиви у Javascript
 * - Базові методи масивів (початок)
 * 
 * Щоб завантажити урок у Шелл:
 * node ('../../lessons/lesson-08/l-08.js');
 */

'use strict';

console.log('\nLesson 07 - Start');

// 
// Інструкції - Statements
// 

// Значення терміну "statement":
// заява - statement, application, declaration, request, claim, allegation
// речення - sentence, clause, statement
// судження - judgment, proposition, statement, assessment, assertion, verdic

// 
// Інструкції-вирази
// 

// Найпростіший вид інструкцій в JavaScript - це вирази, 
// що призводять до деяких динамічних дій. 
// Основна категорія інструкцій-виразів - це інструкції присвоювання. Наприклад:

var temp = 100;

// s = 'Hello ' + name;
// i *= 3;
// counter++;
// delete o.x;

// Кожен рядок у цих прикладах завершується крапкою з комою.

// Складні інструкції - в чистому вигляді практично не використовуються.

// У JavaScript є також можливість об'єднання декількох інструкцій в 
// одну інструкцію або в блок інструкцій. 

// Це робиться простим укладанням будь-якої кількості інструкцій у фігурні дужки. 

// Таким чином, наступні рядки розглядаються як одна інструкція і можуть 
// використовуватися скрізь, 
// де інтерпретатор JavaScript вимагає наявності єдиної інструкції:

{
	temp = Math.PI;
	var cx = Math.cos(temp);
	console.log('cos(' + temp + ') = ' + cx);
}

// Зверніть увагу, що хоча блок інструкцій діє як одна інструкція, 
// він не завершується крапкою з комою. 
// Окремі інструкції всередині блоку завершуються крапкою з комою, 
// однак сам блок - ні.

// 
// Інструкція if / else if
// 

// Інструкція if - це базова керуюча інструкція, 
// що дозволяє інтерпретатору JavaScript приймати рішення або, 
// точніше, виконувати інструкції в залежності від виконання:

// if (вираз) {
// 	інструкція
// }

// Інструкція else виконується тоді, коли вираз дорівнює false. Її синтаксис:

// if (вираз) {
// 	інструкція1
// } else {
// 	інструкція2
// }

// 
// Інструкція else if
// 

if (temp === 1) {
	// Виконуємо блок коду 1
} else if (temp === 2) {
	// Виконуємо блок коду 2
} else if (temp === 3) {
	// Виконуємо блок коду 3
} else {
	// Якщо всі інші умови else не виконуються, виконуємо блок 4
}

// 
// Інструкція switch
// 

// Зверніть увагу на ключове слово break в кінці кожного блоку case. 
// Інструкція break призводить до передачі управління в кінець 
// інструкції switch або циклу. 
// Конструкції case в інструкції switch задають 
// тільки початкову точку виконуваного коду, 
// але не задають ніяких кінцевих точок. 
// У разі відсутності інструкцій break 
// інструкція switch починає виконання блоку коду з мітки case, 
// відповідної значенню виразу, і продовжує виконання до тих пір, 
// поки не дійде до кінця блоку.

// Синтаксис:

var n = 1;
switch (n) {
	case 1: // Виконується, якщо n == 1
		// Виконуємо блок коду 1
		break; // Тут зупиняємося
	case 2: // Виконується, якщо n == 2
		// Виконуємо блок коду 2.
		break; // Тут зупиняємося
	case 3: // Виконується, якщо n == 3
		// Виконуємо блок коду 3.
		break; // Тут зупиняємося
	default: // Якщо все інше не підходить...
		// Виконуємо блок коду 4.
		break; // Тут зупиняємося
}

// Якщо мітка default: відсутня, то інструкція switch повністю пропускається. 
// Зверніть увагу, що в попередніх прикладах мітка default: 
// вказана в кінці тіла інструкції switch після всіх міток case.

// 
// Інструкція while (поки-допоки)
// 

// Так само як інструкція if є базовою керуючої інструкцією, 
// що дозволяє інтерпретатору JavaScript 
// приймати рішення і виконувати повторювані дії. 
// Вона має наступний синтаксис:

var c = 0;
while (c < -1) {
	console.log('Hello');
	++c;
}

// Інструкція while починає роботу з обчислення виразу. 
// Якщо результатом є false, інтерпретатор JavaScript 
// переходить до наступної інструкції програми, а якщо true, 
// то виконується інструкція, що утворює тіло циклу, 
// і вираз обчислюється знову. І знову, якщо значення дорівнює false, 
// інтерпретатор JavaScript переходить 
// до наступної інструкції програми, 
// в іншому випадку він виконує інструкцію знову. 

// Цикл триває, поки вираз не стане рівним false, 
// тоді інструкція while завершить роботу і JavaScript піде далі. 
// За допомогою синтаксису while(true) можна створити безкінечный цикл.

// 
// Цикл do/while
// 

// Цикл do/while в чомусь схожий на цикл while, за винятком того, що вираз циклу перевіряється в кінці, а не на початку циклу. 
// Це означає, що тіло циклу завжди виповнюється хоча б один раз. Синтаксис:

c = 0;

do {
	console.log('Hello', c);
	++c;
}
while (c < -1);

// 
// Інструкція циклу for
//

// Синтаксис циклу for:

// for(ініціалізація; перевірка; (оновлення) інкремент) {
// 	інструкція
// }

// Ініціалізація, перевірка і оновлення - це три ключові операції, 
// виконуваних зі змінною циклу; 
// інструкція for робить ці три кроки явною частиною синтаксису циклу. 
// Це особливо полегшує розуміння дій, 
// виконуваних циклом for, і запобігає таких помилок, 
// як пропуск ініціалізації або збільшення змінної циклу.

var i;

for (i = 0; i <= 10; i++) {
	console.log(i * i);
}

//
// Інструкція for/in
// 

// Синтаксис:

var student = {
	name: 'Petro',
	surname: 'Tymoshenko',
	email: 'p@igov.org.ua',
	address: 'Kyiv',
	birthdayDate: new Date(1986, 8, 24),
	getDaysToBirthday: function() {
		// TODO: look for best syntax
		var birthday = new Date(1985, 11, 9);
		var today = new Date();
		birthday.setFullYear(today.getFullYear());
		if (today > birthday) {
			birthday.setFullYear(today.getFullYear() + 1);
		}
		var daysToBD = Math.floor((birthday - today) / (1000 * 60 * 60 * 24));
	},
	getInfo: function() {
		return this.name + ' ' + this.surname + ' ' + this.adress + ' ' + this.birthdayDate.toDateString();
	}
};

var propertyName; // String
for (propertyName in student) {
	console.log(propertyName, ' = ', student[propertyName]);
}

// Тут змінна повинна бути або ім'ям змінної, або інструкцією var з оголошенням змінної, або елементом масиву, 
// або властивістю об'єкта (тобто має бути чимось, що може перебувати лівій частині виразу присвоювання). 
// Параметр object — це ім'я об'єкта або вираз, результатом якого є об'єкт. 
// А інструкція - це одна або блок інструкцій, що утворюють тіло циклу.


// 
// Інструкція break
// 

// Інструкція break призводить до негайного виходу з 
// самого внутрішнього циклу або iнструкції switch. 
// У циклах вона зазвичай використовується для передчасного 
// виходу в тих випадках, коли за якої-небудь причини 
// відпала потреба доводити виконання циклу до кінця. 
// Коли в циклі є складні умови виходу, 
// то часто простіше реалізувати деякі 
// з цих умов за допомогою інструкції переривання, 
// а не намагатися включити їх усі в один вираз циклу.

var i;

for (i = 0; i <= 10; i++) {
	if (i > Math.round(Math.random() * 1000)) {
		console.log('DOSYT!')
		break;
	}
	console.log(i);
}

// 
// Інструкція continue
// 

// Інструкція continue схожа з інструкцією break. 
// Однак замість виходу з циклу continue запускає 
// нову ітерацію циклу, перериваючи лише поточну ітерацію, 
// а не увесь цикл.

for (i = 0; i <= 50; i++) {
	if (i % 10 === 0) {
		console.log('' + i + ' % 10  === 0!');
		continue;
	}
	console.log('ITERATION END for ' + i);
}

// 
// Інструкція var
// 

// Інструкція var дозволяє явно оголосити одну або декілька змінних. 
// Інструкція має наступний синтаксис:

// var var_1 [ = value_1] [ ,..., var_n [= value_n]]

// За ключовим словом var через кому іде список змінних, 
// що оголошуються; кожна змінна в списку може 
// мати спеціальний вираз-ініціалізатор, 
// який вказує її початкове значення.

// Інструкція var визначає кожну з перелічених змінних шляхом 
// створення властивості з цим ім'ям в об'єктів 
// виклику функції, в якій вона знаходиться, або в глобальному об'єкті, 
// якщо оголошення знаходиться не в тілі функції. 
// Властивість або властивості, що створюються за допомогою інструкції var, 
// не можуть бути видалені оператором delete.

// 
// Інструкція function
// 

// Інструкція function в JavaScript визначає функцію, 
// має такий синтаксис:

// function ім'я_функції([арг1 [,арг2 [..., аргn]]]) {
//   інструкції
// }

// Тут ім'я_функції - має бути ідентифікатором, а не рядком або виразом. 
// За ім'ям функції іде укладений в дужки 
// список імен аргументів, розділених комами. 

// Ці ідентифікатори можуть використовуватися в тілі функції 
// для посилання на значення аргументів, переданих при виклику функції.

// Тіло функції складається з довільного числа JavaScript-інструкцій, 
// укладених у фігурні дужки. 

// Ці інструкції не виконуються при визначенні функції. 
// Вони компілюються і зв'язуються з новим 
// об'єктом функції для виконання при її виклику за допомогою оператора виклику (). 

// Зверніть увагу, що фігурні дужки - це обов'язкова 
// частина інструкції функції. 
// На відміну від блоків інструкцій в циклах, 
// а і інших конструкціях, тіло функції вимагає фігурних дужок, 
// навіть якщо воно складається лише з однієї інструкції 
// (у нових, стрілочних функціях, можна опускати й дужки).

// 
// Інструкція return
// 

// Інструкція return може розташовуватися тільки в тілі функції. 
// Присутність її в будь-якому іншому місці 
// є синтаксичної помилкою. Коли виконується інструкція повернення, 
// обчислюється вираз і його значення 
// повертається в якості значення функції. 
// Інструкція return припиняє виконання функції, навіть якщо в 
// тілі функції залишилися інші інструкції. 
// Інструкція повернення використовується для повернення значення таким чином:

function square(x) {
	// STOP PATTERN:
	if (isNaN(x)) {
		return 'Not a number: ' + x;
	}

	console.log(x, ' = ', x * x);
	return x * x;
}

console.log(square(1));
console.log(square('XYZ'));


// 
// Інструкція throw
// 

// Виняток — це сигнал, що вказує на виникнення якої-небудь 
// виняткової ситуації або помилки. 
// Генерація виняту (throw) — це спосіб повідомити про таку помилку 
// або виняткову ситуацію. 

// Перехопити виняток (catch) — значить обробити його, 
// тобто зробити дії, необхідні або підходящі 
// для відновлення після того, як щось пішло не так. 
// У JavaScript винятки генеруються в тих випадках, 
// коли виникає помилка часу виконання, 
// тоді програма явно генерує його за допомогою інструкції throw. 

// Винятки перехоплюються за допомогою інструкції 
// try / catch / finally. Інструкція throw має наступний синтаксис:

// throw вираз;

// Результатом виразу може бути значення будь-якого типу. Проте зазвичай це екземпляр класу Error чи одного з його підкласів. 
// Також буває зручно використовувати в якості вираження рядок, що містить повідомлення про помилку або числове значення, 
// що позначає деякий код помилки. Ось приклад коду, в якому інструкція кинути застосовується для генерації виключення: 

function factorial(x) {
	// Якщо вхідний аргумент не є допустимим, генеруємо виняток!
	if (x < 0) {
		throw new Error("x не може бути негативним");
	}
	// В іншому випадку — обчислюємо значення і нормальним чином виходимо з функції
	for (var f = 1; x > 1; f *= x, x--) /* пусте тіло циклу */;
	return f;
}
factorial(4);
factorial(-1);

// Коли генерується виняток, інтерпретатор JavaScript негайно 
// перериває нормальне виконання програми і переходить до 
// найближчого обробника переривань. 
// У обробниках винятків використовується конструкція 
// catch з інструкції try/catch/finally. 
// Якщо блок коду, в якому виникло виняток, не має відповідної 
// конструкції catch, інтерпретатор аналізує наступний зовнішній 
// блок коду і перевіряє, чи пов'язаний з ним обробник винятків. 
// Це продовжується до тих пір, поки обробник не буде знайдений. 

// Якщо виняток генерується в функції, що не містить інструкції try/catch/finally, 
// призначеної для його обробки, 
// то виключення поширюється на код, що викликав функцію. 
// Так Винятки поширюються по лексичній структурі методів 
// JavaScript вгору по стеку викликів. 
// Якщо обробник виключення так і не буде знайдений, виключення розглядається як 
// помилка і про неї повідомляється користувачеві.

// 
// Інструкція try/catch/finally
//

// Інструкція try/catch/finally реалізує механізм обробки виключень в JavaScript. 
// Конструкція try ('спробуй') в цій 
// інструкції просто визначає блок коду, в якому обробляються виняткові ситуації. 
// За блоком try іде конструкція 
// catch ('спіймай') з блоком інструкцій, що викликаються, 
// коли десь в блоці try виникає виняток. 

// За конструкцією catch іде блок finally ('нарешті'), 
// що містить код зачистки, який гарантовано виконується незалежно від того, 
// що відбувається в блоці try. І блок catch, і блок finally не є обов'язковими, 
// проте після блоку try мусить 
// обов'язково іти хоча б один з них. Блоки try, catch, finally починаються і закінчуються фігурними дужками. 

// Це обов'язкова частина синтаксису і вона не може бути опущена, 
// навіть якщо між ними міститься тільки одна інструкція.

try {
	// ...
} catch (myException) {
	// ...
} finally {
	// ...
}

// try - зазвичай цей код без збоїв працює від початку до кінця. 
// Але в якийсь момент в ньому може генеруватися виняток 
// або безпосередньо за допомогою інструкції throw, 
// або побічно через викликом методу, що генерує виняток.

// catch - інструкції в цьому блоці виконуються тоді і тільки тоді, 
// коли в блоці try генерується Виняток. 
// Ці інструкції можуть використовувати локальну змінну е, 
// що посилається на об'єкт помилки або на інше значення, 
// вказане в інструкції throw Цей блок може або яким-небудь 
// чином обробити виняток, або проігнорувати його, роблячи щось інше, 
// або заново згенерувати виключення за допомогою інструкції throw.

// finally - цей блок містить інструкції, які виконуються завжди, незалежно від того, що відбулося в блоці try. 
// Вони виконуються, якщо блок try завершений одним з цих способів:
// 1. Нормальним чином, досягнувши кінця блоку
// 2. Із-за інструкції break, continue або return
// 3. З винятком, обробленим у блоці catch
// 4. З неперехваченим винятком, що продовжує своє поширення на більш високі рівні програми



try {
	var rand = Math.random(); //0...1
	if (rand < 0.5) {
		throw 'your number is too small';
	}
} catch (myException) {
	console.log('Hey Dad, I caught an error:', myException)
} finally {
	// ...
}


// 
// 
// 
// Масиви у Javascript (початок)
// 
// 
// 

// Масив - це тип даних, що зберігає пронумеровані значення. 
// Кожне пронумероване значення називається елементом масиву, 
// а число, з яким зв'язується елемент, називається його індексом. 

// Оскільки JavaScript — це нетипізована мова, 
// то елемент масиву може мати будь-який тип, 
// причому різні елементи одного масиву можуть мати різні типи. 

// Елементи масиву можуть навіть містити інші масиви, 
// що дозволяє створювати масиви масивів.

// 
// Cтворення масивів
//

// Масив може бути створено за допомогою літерала [] або функції конструктора-Array(). 
// Створеному масиву допустимо привласнювати будь-яку кількість індексованих елементів.

var a = new Array(); // але краще []
a = [1,2,9];
a[0] = 1.2;
a[1] = 'JavaScript';
a[2] = true;
a[3] = '33';
a[100] = 10001;

// Масиви можуть також бути ініціалізовані шляхом передачі 
// елементів масиву конструктору Array().

a = [1.2, 'JavaScript', true];
a = new Array(1.2, 'JavaScript', true);

// Якщо передати конструктору Array() тільки одне число, 
// то воно визначає довжину масиву.

a = new Array(10);

console.log( 'a length = ' + a.length );

// Найлегше створити масив можна за допомогою літерала, 
// який є простим списком розділених 
// комами елементів масиву в квадратних дужках.

var nums = [2, 3, 5, 7, 11];

// Доступ до елементів масиву здійснюється за допомогою оператора []. 
// Зліва від дужок повинна бути присутнім посилання на масив. 
// Усередині дужок має знаходитися довільний вираз, що має невід'ємне ціле значення (індекс).

var value = a[0]; // отримали значення першого елементу
a[1] = 3.14; // надали значення другому елементу

var i = 2;
a[i] = 33;
a[i + 1] = 'hello';

// 
a[a[i]] = a[0];


// Якщо індекс занадто великий, негативний або дійсний 
// (або це логічне, об'єктне або інше значення), 
// то JavaScript перетворює його в рядок і розглядає 
// результуючий рядок як ім'я властивості об'єкта, 
// а не як індекс масиву: a[-1.23] = true; 
// - створює нову властивість з ім'ям '-1.23', а не новий елемент масиву.

// a['-1.23'] = true;

// console.log(a);

// a = {
// 	'-1.23': true
// }

console.log(a);

// 
// Довжина масиву
// 

// Всі масиви мають спеціальну властивість length, 
// що встановлює кількість елементів у масиві. 
// Максимально можливе значення властивості length дорівнює 232–1.

console.log( 'a length = ' + a.length );

var b = [];
b = new Array(1,2,3);
b = [4, 5];
b[49] = 0;

// Чому буде дорівнювати довжина масиву в прикладі?

console.log( 'b length = ' + b.length ); // 50

var c = [];
c[1000000] = 'hello';
console.log( 'c length = ' + c.length ); // 1000001

// Урізаємо масив:
a.length = 3;
console.log( 'a = ' + a );
console.log( 'A length = ' + a.length );

// Властивість length масиву доступна як для читання, так і для запису. 
// Якщо встановити властивість length в значення, менше поточного, масив коротшає до нової довжини; 
// будь-які елементи, які не потрапляють в новий діапазон індексів, відкидаються, і їх значення втрачаються.

// Якщо зробити властивість length більшим за її поточне значення, 
// то в кінець масиву додаються нові невизначені елементи, 
// збільшуючи масив до нового розміру.


// 
// Методи масивів
// 

// Array.join([separator])

// Метод Array.join([separator]) перетворює всі елементи масиву в рядки і об'єднує їх. 
// Можна вказати необов'язковий строковий аргумент separator, призначений для розділення 
// елементів в результуючому рядку. Якщо роздільник не заданий, використовується кома.

a[0] = 'FIRST';
a[1] = 'SECOND';
var joined = a.join();
console.log('joined = ' + joined + ' ' + (typeof joined) );

// 
// String.split([separator])
//

// Створює масив шляхом розбиття рядка на фрагменти.

var newArray = joined.split('S');
console.log('split = ' + newArray );

var strArr = 'Hello'.split('');
console.log(strArr);

console.log(strArr.join('-'));

// 
// Array.reverse()
// 

// Змінює порядок елементів в масиві на протилежний і повертає масив з переставленими елементами.

console.log(strArr.reverse());

console.log('World'.split('').reverse().join('')); // dlroW

// 
// Array.sort(callbackFunction)
// 

// Cортує елементи масиву і повертає відсортований масив. 
// Якщо метод сортування викликається без аргументів, то він сортує елементи 
// масиву в алфавітному порядку

a = new Array('banana', 'cherry', 'apple').sort().join(', ');

console.log( a );

// Для сортування в якому-небудь іншому порядку, відмінному від алфавітного, 
// можна передати методу sort() як аргумент функцію порівняння. 

// Ця функція встановлює, який із двох її аргументів повинен бути присутнім 
// раніше в відсортованому списку. Якщо перший аргумент повинен передувати другому, 
// функція порівняння повертає негативне число. 
// Якщо перший аргумент в відсортованому масиві повинен слідувати за другим, 
// то функція повертає число, більше нуля. 
// А якщо два значення еквівалентні (тобто порядок їх розташування не важливий), 
// функція порівняння повертає 0.

a = [33, 4, 1111, 222];

// 1. 33, 4 -> 29 => 4, 33
// 2. 4, 1111 -> -1107 => 4, 1111
function aLessThanB (a, b) {
	return a - b;
}

function bLessThanA (a, b) {
	return b - a;
}

// Comparator Function
a.sort( aLessThanB );
console.log( 'sorted by aLessThanB = ' + a );

a.sort( bLessThanA );
console.log( 'sorted by bLessThanA = ' + a );

console.log('\nLesson 07 - End');

console.log('\nLesson 07 - Homework');

//
// Домашня робота:
//

// Маємо студента:

var student = {
	name: 'Petro',
	surname: 'Tymoshenko',
	email: 'p@igov.org.ua',
	address: 'Kyiv',
	birthdayDate: new Date(1986, 8, 24),
	getInfo: function() {
		return this.name + ' ' + this.surname + ' ' + this.adress + ' ' + this.birthdayDate.toDateString();
	}
};

console.log('\nTask 7.1'); 
// (1 бал)
// Прочитай файл уроку. Використай інструкцію for для того, щоб вивести на екран числа від одного до десяти.
// TODO: пиши свій код тут:

console.log('\nTask 7.2'); 
// (2 бали)
// Додай до визначеного вище об'єкта student властивість isManager і надай ій початкового значення false.
// TODO: пишиі свій код тут:

console.log('\nTask 7.3'); 
// (3 бали)
// Напиши функцію canDoNoHomeworksAtAll, яка приймає єдиний аргумент - student і повертає значення 
// його властивості isManager для даного студента.
// TODO: пиши свій код тут:

// 
// Вправи з масивами
// 

// Важливо: все, що потрібно знати для виконання завдань, є у даному файлі

console.log('\nTask 7.4'); 
// (1 бал) 
// Прочитай файл уроку. Створи новий масив primeNumbers, що складається з перших десяти простих чисел. 
// Використай метод push, щоб додати до масиву ще одне просте число.
// TODO: пиши код тут:

console.log('\nTask 7.5'); 
// (2 бали) 
// Напиши функцію sortNumbers і використай її у методі sort масиву для того, 
// щоб відсортувати його елементи у зворотньому порядку.
// TODO: пиши код тут:

console.log('\nTask 7.6'); 
// (3 бали)
// За допомогою методу splice виріж з масиву елементи з другого по третій і при цьому заміни їх на рядок 'foo'.
// TODO: пиши код тут:

console.log('\nLesson 07 - Homework End');

