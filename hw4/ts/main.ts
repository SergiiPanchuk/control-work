// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a: number, b: number) {
    console.log(a * b);
}

area(52, 2);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r: number) {
    console.log(Math.PI * Math.pow(r, 2));
}

areaCircle(4);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h: number, rad: number) {
    console.log(2 * Math.PI * rad * (h + rad));
}

areaCylinder(3, 5);

// - створити функцію яка приймає масив та виводить кожен його елемент
function returnElementOfArr(array: (number | boolean | string)[]) {
    for (const element of array) {
        console.log(element);
    }
}


returnElementOfArr([1, 6, 7, true, 'vasia'])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text: string) {
    document.write(`<p>${text}</p>`)
}

createP('hello world')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text: string) {
    document.write(`<ul>
       <li>${text}</li>
       <li>${text}</li>
       <li>${text}</li> 
    </ul>`)
}

createList('hello world');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListSecond(text: string, number: number) {
    document.write(`<ul>`)
    for (let i = number; i > 0; i--) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createListSecond('hello Okten', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListOfArr(arr: (number | boolean | string)[]) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

createListOfArr([1, 5, true, 'Anna', 56, false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
interface Properti {
    id: number;
    name: string;
    age: number;
}

function returnProperti(arr: Properti[]) {
    for (const obj of arr) {
        document.write(`<div>`);
        document.write(`id - ${obj['id']}, name - ${obj['name']}, age - ${obj['age']}`)
        document.write(`</div>`)
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
])


// - створити функцію яка повертає найменьше число з масиву
function returnMinNumber(arr: number[]) {
    let minNumber: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        if (minNumber > arr[i + 1]) {
            minNumber = arr[i];
        }
    }
    document.write(minNumber.toString());
}

returnMinNumber([1, 5, 6, -6, 4])


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr: number[]) {
    let sumNumbers: number = 0;
    for (const number of arr) {
        sumNumbers = sumNumbers + number;
    }
    document.write(`<div>${sumNumbers}</div>`)
}

sum([5, 6, 4, 10]);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індекса
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr: number[], index1: number, index2: number) {
    const newArr: object = [...arr];
    newArr[index2] = arr[index1];
    newArr[index1] = arr[index2];
    document.write(`<div>${newArr}</div>`)
}

swap([11, 22, 33, 44, 77, 12], 1, 5)

function swap2(arr: number[], index1: number, index2: number) {
    const newArr2: object = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (i === index1) {
            newArr2[index2] = arr[i];
        } else if (i === index2) {
            newArr2[index1] = arr[i];
        } else {
            newArr2[i] = arr[i];
        }
    }
    document.write(`<div>${newArr2}</div>`)
}

swap2([11, 22, 33, 44, 77, 12], 1, 5)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
interface Currency {
    currency: string;
    value: number;
}

function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string) {
    let result: number;
    for (const obj of currencyValues) {
        if (obj['currency'] === exchangeCurrency) {
            result = sumUAH / obj['value'];
        }

    }
    if (result === undefined) {
        document.write(`<div>error exchangeCurrency</div>`)
    } else {
        document.write(`<div>${result}</div>`)
    }
}

exchange(100, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');

