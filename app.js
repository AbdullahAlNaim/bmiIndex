const calc = document.querySelector('#calc');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const height = document.querySelector('#hnum')
const inch = document.querySelector('#hin')
const lb = document.querySelector('#lb')
const age = document.querySelector('#age')

let bmi = (lb.innerHTML / Math.pow(height.innerHTML)) * 703

calc.addEventListener('click', () => {
    bmi = (lb.innerHTML / Math.pow(height.innerHTML)) * 703
    console.log(bmi)
    console.log(lb.innerHTML, height.innerHTML)
})
male.addEventListener('click', () => {
    console.log('pressed male')
})

female.addEventListener('click', () => {
    console.log('pressed female')
})




