// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(value => {
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
        let ul = document.createElement('ul');
        for (const element of value) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', `user-details.html?id=${element['id']}`)
            li.innerText = element['id'] + '-' + element['name'];
            a.appendChild(li);
            ul.appendChild(a);
        }
        document.body.append(ul)
    })
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)