var arrTenElements = [25, true, "ivan", "vasia", 25.5, 100500, false, 3.14, 'petia', ['ivanka', "ilona", "inessa"]];
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
var BookOne = {
    title: "The Churchill Factor",
    pageCount: 432,
    genre: 'biography'
};
BookOne.authors = ['Colleen Hoover', 35];
var BookTwo = {
    title: 'Point of Retreat',
    pageCount: 400,
    genre: 'detective'
};
BookTwo.authors = ['Colleen Hoover', 35];
var BookThree = {
    title: 'Slammed',
    pageCount: 385,
    genre: 'detective'
};
BookThree.authors = ['Boris Johnson', 59];
var Users = [
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
];
console.log(Users[0].password);
console.log(Users[1].password);
console.log(Users[2].password);
console.log(Users[3].password);
console.log(Users[4].password);
console.log(Users[5].password);
console.log(Users[6].password);
console.log(Users[7].password);
console.log(Users[8].password);
console.log(Users[9].password);
var x = 2;
var a = -3;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
var time = +prompt('введіть число від 0 до 59');
if (time < 16 && time > -1) {
    console.log('перша четверть');
}
else if (time < 31 && time > -1) {
    console.log('друга четверть');
}
else if (time < 46 && time > -1) {
    console.log('третя четверть');
}
else if (time <= 59 && time > -1) {
    console.log('четверта четверть');
}
else {
    console.log('Не вірно введено число');
}
var day = +prompt('введіть число від 1 до 31');
if (day < 11 && day > 0) {
    console.log('перша декада');
}
else if (day < 21 && day > 0) {
    console.log('друга декада');
}
else if (day < 32 && day > 0) {
    console.log('третя декада');
}
else {
    console.log('Не вірно введено число');
}
var dayOfWeek = +prompt('введіть число від 1 до 7, де 1 це понеділок а 7 неділя');
switch (dayOfWeek) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('Не вірно введено число');
}
var firstNumber = +prompt('введіть число');
var secondNumber = +prompt('введіть число');
if (firstNumber > secondNumber) {
    console.log(firstNumber);
}
else if (firstNumber < secondNumber) {
    console.log(secondNumber);
}
else {
    console.log('числа рівні');
}
var b = null;
b = b || "default";
console.log(b);
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
// if(coursesAndDurationArray[1]['monthDuration'] > 5)  {
//     console.log('Супер');
// }
for (var i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i]['monthDuration'] > 5) {
        console.log('Супер');
    }
}
