const heading = document.querySelector('pobierz mnie do zmiennej heading')
const ElementTablicoPodobnego1 = creatElement('pobierzmniedo elementutablico-podobnegorazemz innymiparagrafami!')
const ElementTablicoPodobnego2 = creatElement('pobierzmniedo elementutablico-podobnegorazemz innymiparagrafami!')
const ElementTablicoPodobnego3 = creatElement('pobierzmniedo elementutablico-podobnegorazemz innymiparagrafami!')
const  test  = document.getElementsById ('test')
console.log(test)



const div1234 = document.querySelector('div')
const jakisParagraf = documen.creatElement('p')
jakisParagraf.textContent = 'To jest tekst'
div1234.appendChild(jakisParagraf)

// *** innerHTML i input ***

const input = document.querySelector('input')
const underText = document.querySelector('.text-under-input')

input.addEventListener('keydown' , exp => {
    if (exp.key === 'Enter') {
        underText.innerHTML = input.value
        //underTet.text.Conetent = input.value
        //<h2 style= "color: red;">boom! właśnie ktoś zj**ał ci stronę</h2>
    }
})
//const ulElement = document.querySelector('ul')
//const liElement = document.querySelector('li')

//const div1234 = document.querySelector('div')
//const jakisParagraf1 = document.createElement('p')
//const jakisParagraf2 = document.createElement('p')
//const jakisParagraf3 = document.createElement('p')
//jakisParagraf3.textContent = 'To jest tekst akapitu 1'
//jakisParagraf3.textContent = 'To jest tekst akapitu 2'
//jakisParagraf3.textContent = 'To jest tekst akapitu 3'
//div1234.appendChild(jakisParagraf1)
//div1234.appendChild(jakisParagraf2)
//div1234.appendChild(jakisParagraf3)

//document.body.removeChild(liElement)
//div1234.removeChild(jakisParagraf2)
//lielement.remove()

// *** addEventListener ***

target.addEventListener(type, listener)

const btn1 = document.querySelector('btn1')
const btn2 = document.querySelector('btn2')

btn1.addEventListener('click', function () {
    console.log('licznik kliknięcia')
})
btn2.addEventListener('mouseover', () => console.log('najechałeś'))