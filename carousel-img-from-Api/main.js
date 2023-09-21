fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(value => {
        for (const valueElement of value['products']) {
            const div = document.createElement('div');

            const h2 = document.createElement('h2');
            h2.classList.add('product_title')
            h2.innerText = valueElement.title;

            const p = document.createElement('p');
            p.classList.add('product_description')
            p.innerText = valueElement.description;

            const divCarousel = document.createElement('div');
            divCarousel.classList.add('carousel')
            const divImg = document.createElement('div');
            divImg.classList.add('img_block')
            const img = document.createElement('img');
            img.setAttribute('src', valueElement.images[0])
            divImg.appendChild(img);

            const prevBtn = document.createElement('button');
            prevBtn.classList.add('btn_prev');
            prevBtn.innerText = 'Prev'

            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn_next');
            nextBtn.innerText = 'Next';

            divCarousel.append(prevBtn, divImg, nextBtn);


            document.body.appendChild(divCarousel)

            let idImg = 0;

            function renderCarousel(idImg) {
                img.setAttribute('src', valueElement.images[idImg]);
            }

            nextBtn.addEventListener('click', function () {
                prevBtn.removeAttribute("disabled");
                if (idImg + 2 >= valueElement.images.length) {
                    nextBtn.setAttribute("disabled", "")
                }
                if (valueElement.images.length !== 1) {
                    idImg++;
                    renderCarousel(idImg);
                }
            })

            prevBtn.addEventListener('click', function () {
                nextBtn.removeAttribute("disabled");
                if (idImg < 2) {
                    prevBtn.setAttribute("disabled", "")
                }
                idImg = idImg - 1;
                renderCarousel(idImg);

            })
        }
    })


let promis = new Promise(resolve => {
    setTimeout(() => {
        let x = 1;
        console.log(x)
        resolve(x);
    }, 1000)
})
promis.then(value => {
    return new Promise(resolve => {
        setTimeout(() => {
            value++;
            console.log(value);
            resolve(value)
        }, 1000)
    })
})
    .then(x => {
        return new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            }, 1000)
        })
    })
    .then(x => {
        setTimeout(() => {
            x++;
            console.log(x)
        }, 1000)
    })