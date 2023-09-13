// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = []
users.push(new User(1, 'Anna', 'Poroshenko', 'choco@gmail.com', '0995642147'));
users.push(new User(2, 'Pawa', 'zele', 'zele@gmail.com', '0995632447'));
users.push(new User(3, 'inna', 'mele', 'mele@gmail.com', '0995635147'));
users.push(new User(4, 'vasya', 'PAnchyk', 'PAnchyk@gmail.com', '0992632147'));
users.push(new User(5, 'vitia', 'iunuts', 'iunuts@gmail.com', '0995612147'));
users.push(new User(6, 'olia', 'petuk', 'petuk@gmail.com', '0995632747'));
users.push(new User(7, 'miwa', 'metuk', 'metuk@gmail.com', '0995632447'));
users.push(new User(8, 'dima', 'wmetuk', 'wmetuk@gmail.com', '09956396147'));
users.push(new User(9, 'mawa', 'tapa', 'tapa@gmail.com', '0995632187'));
users.push(new User(10, 'Anna', 'lylchuk', 'lylchuko@gmail.com', '0998632147'));


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залиши
// вши тільки об'єкти з парними id (filter)
const filterToId = users.filter((x) => x.id % 2 === 0);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortToUpUsers = users.sort((a, b) => b.id - a.id);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [
    new Client(1, 'Anna', 'Poroshenko', 'choco@gmail.com', '0995642147', ['milk', 'bread', 'voter']),
    new Client(2, 'Pawa', 'zele', 'zele@gmail.com', '0995632447', ['chips', 'coca-cola']),
    new Client(3, 'inna', 'mele', 'mele@gmail.com', '0995635147', ['kokos']),
    new Client(4, 'vasya', 'PAnchyk', 'PAnchyk@gmail.com', '0992632147', ['milk', 'soda']),
    new Client(5, 'vitia', 'iunuts', 'iunuts@gmail.com', '0995612147', ['sausage', 'potato', 'tomato']),
    new Client(6, 'olia', 'petuk', 'petuk@gmail.com', '0995632747', ['pineapple', 'watermelon', 'apple']),
    new Client(7, 'miwa', 'metuk', 'metuk@gmail.com', '0995632447', ['apple', 'cucumber']),
    new Client(8, 'dima', 'wmetuk', 'wmetuk@gmail.com', '09956396147', ['chery', 'strawberry']),
    new Client(9, 'mawa', 'tapa', 'tapa@gmail.com', '0995632187', ['chess', 'milk', 'bread', 'potato', 'apple']),
    new Client(10, 'Anna', 'lylchuk', 'lylchuko@gmail.com', '0998632147', ['mivina', 'juice']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(name);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, made, year, maxSpeed, motor) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSped = maxSpeed;
    this.motor = motor;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} km на годину`)
    };
    this.info = function () {
        console.log(`model-${model},made-${made},year-${year},maxSpeed-${maxSpeed},motor-${motor},`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (name, category) {
        this.name = name;
        this.category = category;
    }
}

const bmw = new Car('x5', 'germany', 2003, 240, 'e53');
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(300);
bmw.changeYear(2005);
bmw.addDriver('Vasya', 'B,C');
console.log(bmw);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, made, year, maxSped, motor) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSped = maxSped;
        this.motor = motor;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSped} km на годину`)
    };

    info() {
        console.log(`model-${this.model},made-${this.made},year-${this.year},maxSpeed-${this.maxSpeed},motor-${this.motor},`)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(name, category) {
        this.name = name;
        this.category = category;
    }
}

const audi = new CarClass('q7', 'germany', 2014, 260, 'v8');
audi.drive();
audi.info();
audi.increaseMaxSpeed(300);
audi.changeYear(2005);
audi.addDriver('Vasya', 'B,C');
console.log(audi);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


function Cinderella(name, age, sizeShoes) {
    this.name = name;
    this.age = age;
    this.sizeShoes = sizeShoes;
}

const cinderellas = [
    new Cinderella('Emmy', 18, 35),
    new Cinderella('Kay', 20, 37),
    new Cinderella('Lola', 19, 38),
    new Cinderella('Inna', 21, 34),
    new Cinderella('Vika', 25, 36),
    new Cinderella('Rapuncely', 49, 34),
    new Cinderella('Moana', 28, 37),
    new Cinderella('Anna', 18, 39),
    new Cinderella('Elyza', 19, 42),
    new Cinderella('Timmy', 20, 36)
]


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoesFind) {
        this.name = name;
        this.age = age;
        this.shoesFind = shoesFind;
    }
}


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const tom = new Prince('Tom', 19, 38);

function findCinderella(cinderellas) {
    for (const cinderella of cinderellas) {
        if (cinderella.sizeShoes === tom.shoesFind) {
            return cinderella;
        }
    }
}

console.log(findCinderella(cinderellas));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const find = cinderellas.find((a) => a.sizeShoes === tom.shoesFind);
