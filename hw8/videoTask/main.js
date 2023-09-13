let arrNames = document.querySelectorAll('.item-grid-card__title');
let arrNameText = [];
for (elem of arrNames) {
    arrNameText.push(elem.textContent.trim());
}
console.log(arrNameText);


let arrAuthors = document.querySelectorAll('.item-grid-music-preview__author');
let arrAuthorText = [];
for (elem of arrAuthors) {
    // let text= elem.textContent.trim().slice(2).trim();
    arrAuthorText.push(elem.textContent.trim().slice(2).trim());
}
console.log(arrAuthorText);

let arrAudioTegs = document.querySelectorAll('.audio-player__wave audio');
let arrAudioLinks = [];
for (elem of arrAudioTegs) {
    arrAudioLinks.push(elem.getAttribute('src'));
}
console.log(arrAudioLinks);

const result = [];

function CreateArr(title, author, mp3) {
    this.title = title;
    this.author = author;
    this.mp3 = mp3;
}

for (let i = 0; i < arrNameText.length; i++) {
    result.push(new CreateArr(arrNameText[i], arrAuthorText[i], arrAudioLinks[i]));
}
console.log(result);