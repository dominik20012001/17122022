let score 
const add = (x, y) => {
    score = x + y 

    if (score % 2 === 0)    {
        func1()
    } else {
        funct2()
    }
}
const func1 =() => {
    console.log (`Liczba ${score} jest parzysta`);
}

const funct2 = () => {
    console.log(`Liczba ${score} jest nieparzysta`);
}
add(1673462929046, 523)

let celsius
let temp
 const farenheit = (c) => {
    celsius = c;
    temp = celsius * 1.8 + 32

    console.log(`${celsius} °C = ${temp} °F`)
 }
 farenheit(37.785)

 const num = 10
 const numbers = []
 for (let i = 0; i < num; i++){
    numbers.push(i)
}

console.log(numbers)

const checkNumbers = number => {
    if (number % 3 === 0 && number !== 0)   {
console.log(`${number} jest podzielna przez 3`);
} else {
    console.log(`${number} nie jest podzielne przez 3 lub ${number} - 0.`);
    }
}
numbers.forEach(checkNumbers)

// <li>li bez ul-a</li>
//<ul>
//<liid="item1">li z ID</li>
//<li>li bez niczego</li>
//<liclass="klasa">li z klasą</li>
//<liclass="klasa">li kolejnyz klasą</li>
//<li>kolejnyli bez niczego</li>
//</ul>
const test = document.getElementById('item1')
console.log(test)

const test2 =document.getElementsByTagName('li')
console.log(test2)

const test3 = document.getElementsByClassName('klasa')
console.log(test3)

const test4 = document.querySelector('li')
console.log(test4)

const test5 = document.querySelector('ul, li')
console.log(test5)

const test6 = document.querySelectorAll('li')
console.log(test6)

const ulList = document.querySelector('ul')
const newLi = document.createElement('li')
ulList.appendChild(newLi).textContent = '👀'