// let a=document.querySelector('h1')
// a.style.color='green'
// function changeColor (){
//     a.style.color = 'red'
// }
// function changeSize (){
//     a.style.fontSize = '50px'
// }


// let d=+prompt ('введите диаметр')
// let l=d*3.14
// console.log ('длина окружности=',l)
// alert ('длина окружности (l)=' +l)


// let a, b, c, d, e, f
// a=+prompt('введите певое число')
// b=+prompt('введите второе число')
// c=a+b
// d=a-b
// e=a*b
// f=a/b
// console.log ('сумма', c)
// console.log ('разница', d)
// console.log ('умножение', e)
// console.log ('деление',f)


const button=document.querySelectorAll ('button')
button.forEach(btn=>btn.style.height='40px')
button.forEach(btn=>btn.style.backgroundColor='grey')
let a,rez
a=+prompt ('введите число a')
console.log ('a=', a)
function unar() {
    rez=-a
    console.log('-a=', rez)
}
function matchRow (){
    rez=a**2
    console.log(`${a}^2=${rez}`)
}
function round (){
    a=a/3
    console.log('a=', a)
    rez=Math.round(a)
    console.log('a/3=',rez)
}
function ost (){
    rez=a%10
    console.log('последняя цифра -', rez)
}