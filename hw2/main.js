
const arrTenElements = [25, true, "ivan", "vasia", 25.5, 100500, false, 3.14, 'petia',['ivanka', "ilona", "inessa"]];
console.log(arrTenElements[0]);
console.log(arrTenElements[1]);
console.log(arrTenElements[2]);
console.log(arrTenElements[3]);
console.log(arrTenElements[4]);
console.log(arrTenElements[5]);
console.log(arrTenElements[6]);
console.log(arrTenElements[7]);
console.log(arrTenElements[8]);
console.log(arrTenElements[9]);

const BookOne= {
    title: 'The Churchill Factor',
    pageCount: 432,
    genre: 'biography'
}
const BookTwo= {
    title: 'Point of Retreat',
    pageCount: 400,
    genre: 'detective'
    }
const BookThree= {
    title: 'Slammed',
    pageCount: 385,
    genre: 'detective'
    }
const BookFour= {
    title: 'The Churchill Factor',
    pageCount: 432,
    genre: 'biography',
    authors: ['Colleen Hoover', 35]
}
const BookFive= {
    title: 'The Churchill Factor',
    pageCount: 432,
    genre: 'biography',
    authors: ['Colleen Hoover', 35]
}
const BookSix= {
    title: 'The Churchill Factor',
    pageCount: 432,
    genre: 'biography',
    authors: ['Boris Johnson', 59]
}

const Users = [
    {
        name: 'vasia',
        username: 'vasia007',
        password: 'vasia2010'
    },
    {
        name: 'kolia',
        username: 'kolian4ik',
        password: 'kili4ik'
    },
    {
        name: 'annia',
        username: 'aniyta',
        password: 'princes'
    },
    {
        name: 'ilona',
        username: 'iliysik',
        password: 25102014
    },
    {
        name: 'ivanka',
        username: 'zaika12',
        password: 'youandi'
    },
    {
        name: 'sergii',
        username: 'ser4ik',
        password: 'ser4ik07'
    },
    {
        name: 'anton',
        username: 'spam',
        password: '12S12P12A12M'
    },
    {
        name: 'sasha',
        username: 'tapa',
        password: 'liuba'
    },
    {
        name: 'liuba',
        username: '007lyba',
        password: 1111
    },
    {
        name: 'inna',
        username: 'in4ik',
        password: 563214
    },
]
console.log(Users[0].password)
console.log(Users[1].password)
console.log(Users[2].password)
console.log(Users[3].password)
console.log(Users[4].password)
console.log(Users[5].password)
console.log(Users[6].password)
console.log(Users[7].password)
console.log(Users[8].password)
console.log(Users[9].password)

let x = 2;
let a = -3;
if( x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

let time = +prompt('введіть число від 0 до 59');
if(time < 16 && time > -1){
    console.log('перша четверть');
}else if (time < 31 && time > -1) {
    console.log('друга четверть');
}else if (time < 46 && time > -1) {
    console.log('третя четверть');
}else if (time <=59 && time > -1) {
    console.log('четверта четверть');
}else {
    console.log('Не вірно введено число');
}

let day = +prompt('введіть число від 1 до 31');
if(day < 11 && day > 0){
    console.log('перша декада');
}else if (day < 21 && day > 0) {
    console.log('друга декада');
}else if (day < 32 && day > 0) {
    console.log('третя декада');
}else {
    console.log('Не вірно введено число');
}

let dayOfWeek = +prompt('введіть число від 1 до 7, де 1 це понеділок а 7 неділя');
switch (dayOfWeek) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;
    default:
        console.log('Не вірно введено число')
}

let firstNumber = +prompt('введіть число');
let secondNumber = +prompt('введіть число');
if(firstNumber > secondNumber) {
    console.log(firstNumber);
}else if(firstNumber < secondNumber) {
    console.log(secondNumber);
}else{
    console.log('числа рівні')
}


let b = null;
b = b || "default";
console.log(b)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// if(coursesAndDurationArray[1]['monthDuration'] > 5)  {
//     console.log('Супер');
// }

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if(coursesAndDurationArray[i]['monthDuration'] > 5)  {
        console.log('Супер');
    }
}