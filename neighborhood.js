const restArr = ['TsunamiRestaurant & Sushi Bar', 'Texas Roadhouse', 'Salsa Leedos Mexican Grill', 'Good Barbeque Co']

const randomElement = restArr[Math.floor.Math.random() * months.length];
console.log(random, months[random]);

console.log(randomElement)


const section = document.querySelector('section')

const btn = document.querySelectorAll('.random')

const newPara = document.createElement('p')

for (let i = 0; i < btn.length; i++) {
     btn[i].addEventListener('click', e =>{node
            newPara.textContent = randomElement.value
    })
}

section.appendChild(newPara)