const weightEl = document.querySelector('#weight')
const heightEl = document.querySelector('#height')
const bmiIndexEl = document.querySelector('#bmiIndex')
const btn = document.querySelector('#button')

let weight = 0;
let height = 0;

weightEl.addEventListener('keydown', (e) => {
    weight = +e.target.value;
})
heightEl.addEventListener('keydown', (e) => {
    height = +e.target.value;
})
btn.addEventListener('click', ()=>{
    bmiIndexEl.textContent = bmi(weight,height)
})


const bmi = (weight, height) =>{
    if(weight === 0 || height === 0 ) return "";

    let bmi = Math.round(weight/(height*height))
    if (bmi<=18) {
        return `${bmi}, Semiring`;
    }else if(bmi<=25) {
        return `${bmi}, Normal ekansiz, gazini bosing.`;
    }else {
        return `${bmi}, Oka, ozroq yeng sal, ozishingiz kerak..`;
    }    
}
