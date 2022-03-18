const section = document.querySelector('section')

const btns = document.querySelectorAll('.favorites')

const newPara = document.createElement('p')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e =>{
        newPara.textContent = e.target.value
    })
}

section.appendChild(newPara)