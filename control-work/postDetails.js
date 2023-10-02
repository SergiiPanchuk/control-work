//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
const url = new URL(location.href);
const postId = url.searchParams.get('id');

const getComments = async () => {
    try {
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
        const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json());
        const commentsDiv = document.getElementsByClassName('comments_wrapper')[0];
        const postDiv = document.getElementsByClassName('post_info')[0];
        console.log(post);
        renderPostInfo(post, postDiv);
        renderComments(comments, commentsDiv);
    } catch (error) {
        console.log('Помилка отримання даних', error);
    }
}
getComments();

function renderPostInfo(obj, block) {
    const ul = document.createElement('ul');
    for (const objKey in obj) {
        const li = document.createElement('li');
        li.innerText = `${objKey} : ${obj[objKey]}`;
        ul.appendChild(li)
    }
    block.appendChild(ul);
}

function renderComments(arr, block) {
    for (const value in arr) {
        const div = document.createElement('div');
        div.classList.add('comment_block');
        const ul = document.createElement('ul');
        for (const element in arr[value]) {
            const li = document.createElement('li');
            li.innerText = `${element} : ${arr[value][element]}`;
            ul.appendChild(li);
        }
        div.appendChild(ul);
        block.appendChild(div)
    }
}
