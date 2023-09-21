// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана
// через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(value => {
        let ul =document.createElement('ul');
        ul.innerHTML = `
            <li>id - ${value['id']}</li>
            <li>name - ${value['name']}</li>
            <li>username - ${value['username']}</li>
            <li>email - ${value['email']}</li>
            <li>phone - ${value['phone']}</li>
            <li>website - ${value['website']}</li>
            <ul>
                <h5>company:</h5>
                <li>name - ${value['company']['name']}</li>
                <li>catchPhrase - ${value['company']['catchPhrase']}</li>
                <li>bs - ${value['company']['bs']}</li>
            </ul>
            <ul>
                <h5>address:</h5>
                <li>city - ${value['address']['city']}</li>
                <li>street - ${value['address']['street']}</li>
                <li>suite - ${value['address']['suite']}</li>
                <li>zipcode - ${value['address']['zipcode']}</li>
                <ul>
                <h5>geo:</h5>
                    <li>lat - ${value['address']['geo']['lat']}</li>
                    <li>lng - ${value['address']['geo']['lng']}</li>
                </ul> 
            </ul> 
        `
        console.log(value);
        document.body.appendChild(ul);
    })