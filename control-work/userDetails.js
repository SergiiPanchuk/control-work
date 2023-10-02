// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
const url = new URL(location.href);
const userId = url.searchParams.get('id');

const render = async () => {
    try {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json());
        const posts = await fetch(` https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(res => res.json());
        const userWrap = document.getElementsByClassName('user_wrap')[0];
        const titlesWrap = document.getElementsByClassName('titles_wrap')[0];
        const ul = document.createElement('ul');
        const btnTitle = document.createElement('button');
        btnTitle.innerText = 'post of current user';
        btnTitle.addEventListener('click',() => renderTitles(posts, titlesWrap))
        userWrap.append(ul, btnTitle)
        renderInfo(user, ul);
    }catch (error) {
        console.log('Помилка отримання даних', error);
    }
}
render()

function renderTitles(arr, block) {
    if (block.textContent !== ''){
        block.textContent = '';
    }else {
        for (const value in arr) {
            const div = document.createElement('div');
            div.classList.add('title_card');
            const p = document.createElement('p');
            const postDetails = document.createElement('a');
            postDetails.setAttribute('href', `post-details.html?id=${arr[value]['id']}`);
            postDetails.innerText = 'post-details';
            p.innerText = arr[value]['title'];
            div.append(p, postDetails)
            block.append(div);
        }
    }
}

function renderInfo(user, block) {
    for (const element in user) {
        if (typeof user[element] === 'object') {
            ulRender(element, user[element], block)
        } else {
            liRender(element, user[element], block);
        }
    }
}

function ulRender(key, value, block) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    block.appendChild(li);
    li.appendChild(ul);
    ul.innerText = `${key} :`;
    renderInfo(value, ul);
}

function liRender(key, value, block) {
    const li = document.createElement('li');
    li.innerText = `${key} : ${value}`;
    block.appendChild(li);
}
