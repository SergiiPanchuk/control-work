// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.forms['form1'];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let div = document.createElement('div');
    div.innerText = `${this.name.value} ${this.surname.value}, ${this.age.value}`
    document.body.appendChild(div);
    document.querySelector('#name').value = '';
    document.querySelector('#surname').value = '';
    document.querySelector('#age').value = '';

})


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divNumber = document.getElementsByClassName('divNumber')[0];
let number = divNumber.textContent;
window.addEventListener('load', function (ev) {
    let localNumber = localStorage.getItem('number');
    number = +localNumber + 1;
    divNumber.textContent = number;
    localStorage.setItem('number', number.toString());
})


// ==========================
// Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener('load', function (ev) {
    let data = new Date();
    localStorage.setItem(`session ${number}`, JSON.stringify(data));
})


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arrHundred = [];
for (let i = 1; i <= 87; i++) {
    const newObj = {
        id: i
    };
    arrHundred.push(newObj);
}
let lastId = 0;

const divCarousel = document.querySelector('.content_carousel');

function renderCarousel() {
    for (let i = 0; i < 10; i++) {
        let p = document.createElement('p');
        p.innerText = `${arrHundred[lastId].id}`
        divCarousel.appendChild(p);
        lastId++
    }
}

renderCarousel();

const btnNext = document.querySelector('.btn_next');
btnNext.addEventListener('click', function () {
    if (lastId + 10 > arrHundred.length) {
        btnNext.setAttribute('disabled', 'disabled');
    }
    divCarousel.innerHTML = '';
    renderCarousel(lastId);
    btnPrew.removeAttribute('disabled')
})
const btnPrew = document.querySelector('.btn_prew');
btnPrew.addEventListener('click', function () {
    if (lastId - 10 <= 10) {
        btnPrew.setAttribute('disabled', 'disabled');
        lastId = 0;
    } else {
        lastId = lastId - 20;
    }
    divCarousel.innerHTML = '';
    renderCarousel(lastId);
    btnNext.removeAttribute('disabled')
})


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const h1 = document.getElementById('text');
const btnVisibility = document.getElementById('visibility');

btnVisibility.addEventListener('click', function () {
    h1.remove();
})


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const btnCheck = document.getElementsByClassName('btn_check')[0];
btnCheck.addEventListener('click', function () {
    let inputAge = document.getElementsByName('check_age')[0];
    inputAge.value < 18 ? alert('Ваш вік менше 18-ти') : alert('Ваш вік більше або рівний 18-ти')
    inputAge.value = '';
})
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const tr = document.getElementsByName('tr')[0];
const td = document.getElementsByName('td')[0];
const tdText = document.getElementsByName('td-text')[0];
const btnTable = document.getElementsByClassName('btn_table')[0];
const divTable = document.getElementsByClassName('table')[0];

btnTable.addEventListener('click', function () {
    const table = document.createElement('table');
    for (let i = 0; i < tr.value; i++) {
        const trTeg = document.createElement('tr');
        for (let j = 0; j < td.value; j++) {
            const tdTeg = document.createElement('td');
            tdTeg.innerText = tdText.value;
            trTeg.appendChild(tdTeg)
        }
        table.appendChild(trTeg);
    }
    divTable.appendChild(table);
})


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const divMoney = document.getElementById('money');

const startTime = Date.now();
localStorage.getItem('money') ? divMoney.innerText = localStorage.getItem('money') : divMoney.innerText = '100грн';

console.log(divMoney.innerText);

if (localStorage.getItem('sessionStartTime') && startTime - +localStorage.getItem('sessionStartTime') >= 10000) {
    divMoney.innerText = Number(divMoney.innerText.slice(0, -3)) + 10 + 'грн';
    localStorage.setItem('money', divMoney.innerText);
}
console.log(divMoney.innerText);
localStorage.setItem('sessionStartTime', startTime.toString());