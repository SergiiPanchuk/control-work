// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
class userRender {
    static async showAll() {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
        const usersDiv = document.querySelector('.usersContainer');
        const ul = document.createElement('ul');
        const divPosts = document.createElement('div');
        const divComents = document.createElement('div');
        users.forEach(element => {

            let li = document.createElement('li');
            li.innerText = element['id'] + '-' + element['name'];
            const buttonPost = document.createElement('button');

            buttonPost.innerText = 'Posts';
            buttonPost.onclick = async () => {
                const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`).then(value => value.json());
                divPosts.innerHTML='';
                posts.forEach(element => {
                    const p = document.createElement('p');

                    p.innerText = element.title + ' : ' + element.body;
                    const buttonComent = document.createElement('button');

                    buttonComent.innerText= 'Coments';
                    buttonComent.onclick = async () =>{
                        divComents.innerHTML = '';
                        const coments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${element.id}`).then(value => value.json());
                        coments.forEach(element => {
                            const p = document.createElement('p');
                            p.innerText = element.name + ' - ' + element.body;
                            divComents.appendChild(p)
                        })
                    }
                    divPosts.append(p,buttonComent);
                })
            }
            li.appendChild(buttonPost);
            ul.appendChild(li);
        })
        usersDiv.append(ul,divPosts,divComents)
    }
}

userRender.showAll().then()






// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)

const form = document.forms.namedItem('product');
let idOfProduct = 1;
form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const many = document.getElementsByName('many')[0].value;
    const price = document.getElementsByName('price')[0].value;
    const image = document.getElementsByName('image')[0].value;

    const product = {name:name,many:many,price:price,image:image};

    localStorage.setItem('product'+idOfProduct, JSON.stringify(product));
    idOfProduct++;

    form.reset()
}
