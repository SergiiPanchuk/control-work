var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    console.log(a * b);
}
area(52, 2);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    console.log(Math.PI * Math.pow(r, 2));
}
areaCircle(4);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, rad) {
    console.log(2 * Math.PI * rad * (h + rad));
}
areaCylinder(3, 5);
// - створити функцію яка приймає масив та виводить кожен його елемент
function returnElementOfArr(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        console.log(element);
    }
}
returnElementOfArr([1, 6, 7, true, 'vasia']);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text) {
    document.write("<p>".concat(text, "</p>"));
}
createP('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write("<ul>\n       <li>".concat(text, "</li>\n       <li>").concat(text, "</li>\n       <li>").concat(text, "</li> \n    </ul>"));
}
createList('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListSecond(text, number) {
    document.write("<ul>");
    for (var i = number; i > 0; i--) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write('</ul>');
}
createListSecond('hello Okten', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListOfArr(arr) {
    document.write("<ul>");
    for (var i = 0; i < arr.length; i++) {
        document.write("<li>".concat(arr[i], "</li>"));
    }
    document.write('</ul>');
}
createListOfArr([1, 5, true, 'Anna', 56, false]);
function returnProperti(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        document.write("<div>");
        document.write("id - ".concat(obj['id'], ", name - ").concat(obj['name'], ", age - ").concat(obj['age']));
        document.write("</div>");
    }
}
returnProperti([
    {
        id: 654,
        name: 'Violeta',
        age: 19
    },
    {
        id: 1,
        name: 'Anna',
        age: 35
    },
    {
        id: 4,
        name: 'Dima',
        age: 20
    }
]);
// - створити функцію яка повертає найменьше число з масиву
function returnMinNumber(arr) {
    var minNumber = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (minNumber > arr[i + 1]) {
            minNumber = arr[i];
        }
    }
    document.write(minNumber.toString());
}
returnMinNumber([1, 5, 6, -6, 4]);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    var sumNumbers = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var number = arr_2[_i];
        sumNumbers = sumNumbers + number;
    }
    document.write("<div>".concat(sumNumbers, "</div>"));
}
sum([5, 6, 4, 10]);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індекса
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    var newArr = __spreadArray([], arr, true);
    newArr[index2] = arr[index1];
    newArr[index1] = arr[index2];
    document.write("<div>".concat(newArr, "</div>"));
}
swap([11, 22, 33, 44, 77, 12], 1, 5);
function swap2(arr, index1, index2) {
    var newArr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === index1) {
            newArr2[index2] = arr[i];
        }
        else if (i === index2) {
            newArr2[index1] = arr[i];
        }
        else {
            newArr2[i] = arr[i];
        }
    }
    document.write("<div>".concat(newArr2, "</div>"));
}
swap2([11, 22, 33, 44, 77, 12], 1, 5);
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    var result;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var obj = currencyValues_1[_i];
        if (obj['currency'] === exchangeCurrency) {
            result = sumUAH / obj['value'];
        }
    }
    if (result === undefined) {
        document.write("<div>error exchangeCurrency</div>");
    }
    else {
        document.write("<div>".concat(result, "</div>"));
    }
}
exchange(100, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
