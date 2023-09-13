// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray(str1));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arrStrings = arrNumbers.map(x => x.toString());
console.log(arrStrings);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
function sortNums(nums, ascending) {
    if (ascending === 'ascending') {
        return nums.sort(function (a, b) {
            return a - b;
        });
    }
    else {
        return nums.sort(function (a, b) {
            return b - a;
        });
    }
}
console.log(sortNums(nums, 'descending'));
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const sortArr = coursesAndDurationArray.sort(function (a, b) {
    return a.monthDuration - b.monthDuration;
});
const filterArr = sortArr.filter(a => a.monthDuration > 5);
const addValueArr = filterArr.map(function (x, index) {
    x['id'] = index + 1;
    return x;
});
console.log(addValueArr);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
//
//     cardSuit: ['spade', 'diamond','heart', 'clubs'],
//     value: [[6,7,8,9,10], 'ace','jack','queen','king'],
//     color: ['red','black']
//
const cards = [];
function createCards(cardSuit, value) {
    for (const cardSuitElement of cardSuit) {
        for (const valueElement of value) {
            cards.push(`${valueElement} ${cardSuitElement}`);
        }
    }
}
createCards(['spade', 'diamond', 'heart', 'clubs'], [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king']);
console.log(cards);
// - знайти піковий туз
console.log(cards.find(x => x === 'ace spade'));
// - всі шістки--target es6 --lib es5
const allSix = cards.filter(function (x) {
    return x.includes('6');
});
console.log(allSix);
// - всі червоні карти
const allHeart = cards.filter(x => x.includes('heart'));
const allDiamond = cards.filter(x => x.includes('diamond'));
console.log(allHeart.concat(allDiamond));
// - всі буби
console.log(allDiamond);
// - всі трефи від 9 та більше
const allClubs = cards.filter(function (x) {
    return (x.includes('clubs') && !x.includes('6') && !x.includes('7') && !x.includes('8'));
});
console.log(allClubs);
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let result = cards.reduce(function (accumulator, x) {
    if (x.includes('spade')) {
        accumulator['spades'].push(x);
    }
    else if (x.includes('diamond')) {
        accumulator['diamonds'].push(x);
    }
    else if (x.includes('heart')) {
        accumulator['hearts'].push(x);
    }
    else {
        accumulator['clubs'].push(x);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(result);
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
function findAllSassModules() {
    return coursesArray.filter(function (a) {
        if (a['modules'].indexOf('sass') > 0) {
            return a;
        }
    });
}
function findAllDockerModules() {
    return coursesArray.filter(function (a) {
        if (a['modules'].indexOf('docker') > 0) {
            return a;
        }
    });
}
console.log(findAllSassModules());
console.log(findAllDockerModules());
