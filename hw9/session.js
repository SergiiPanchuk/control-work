const allData = {};

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    allData[key] = value;
}
console.log(allData);
for (const element in allData) {
    let div = document.createElement('div');
    if(element.includes('session')){
        div.innerHTML= `<p>${element}- ${allData[element]}</p>`;
        document.body.appendChild(div);
    }
};

