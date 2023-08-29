//
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min = (num1, num2, num3) => {
    if (num1 < num2) {
        return num1 < num3 ? num1 : num3
    } else {
        return num2 < num3 ? num2 : num3;
    }
}
console.log(min(150, 1, 15));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const max = (num1, num2, num3) => {
    if (num1 > num2) {
        return num1 > num3 ? num1 : num3
    } else {
        return num2 > num3 ? num2 : num3;
    }
}
console.log(max(0, 10, 15));


// - створити функцію яка повертає найбільше число з масиву
const maxOfArr = (arr) => Math.max(...arr)
console.log(maxOfArr([5, 8, 7, 10, 0, -5]));


// - створити функцію яка повертає найменьше число з масиву
const minOfArr = (arr) => Math.min(...arr)
console.log(minOfArr([5, 8, 7, 10, 0, -5]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumOfArr = (arr) => {
    let sumNumbers = 0;
    for (const number of arr) {
        sumNumbers = sumNumbers + number;
    }
    return sumNumbers;
}
console.log(sumOfArr([1, 2, 10]));


// - Дано натуральное число n. Выведите все числа от 1 до n.
const numberN = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i)
    }
}
numberN(4);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const fromAToB = (a, b) => {
    if (a < b) {
        for (; a <= b; a++) {
            console.log(a)
        }
    } else {
        for (; a >= b; a--) {
            console.log(a)
        }
    }
}
fromAToB(14, 7);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const foo1 = (arr, num) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === num) {
            newArr[i + 1] = arr[i];
        }else if(newArr[i]) {
            newArr[i-1] = arr[i];
        }
        else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

console.log(foo1([9, 8, 0, 4], 0));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const foo = (arr) => {
    const newArr = [];
    for (const element of arr) {
        if (element !== 0) {
            newArr.push(element);
        }
    }
    for (const element of arr) {
        if (element === 0) {
            newArr.push(element);
        }
    }
    return newArr;
}
console.log(foo([1, 5, 0, 8, 0, 7]));

