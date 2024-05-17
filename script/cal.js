let input = document.querySelector('#display')

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let btn0 = document.querySelector('#btn0')
let btnadd = document.querySelector('#btn-add')
let btnsub = document.querySelector('#btn-sub')
let btnmulti = document.querySelector('#btn-multi')
let btnequal = document.querySelector('#btn-equal')
let btndiv = document.querySelector('#btn-div')
let btnC = document.querySelector('#btnC')




btn1.addEventListener ('click', ()=>{
    input.value += btn1.value;
})
btn2.addEventListener ('click', ()=>{
    input.value += btn2.value;
})
btn3.addEventListener ('click', ()=>{
    input.value += btn3.value;
})
btn4.addEventListener ('click', ()=>{
    input.value += btn4.value;
})
btn5.addEventListener ('click', ()=>{
    input.value += btn5.value;
})
btn6.addEventListener ('click', ()=>{
    input.value += btn6.value;
})
btn7.addEventListener ('click', ()=>{
    input.value += btn7.value;
})
btn8.addEventListener ('click', ()=>{
    input.value += btn8.value;
})
btn9.addEventListener ('click', ()=>{
    input.value += btn9.value;
})
btn0.addEventListener ('click', ()=>{
    input.value += btn0.value;
})
btnadd.addEventListener ('click', ()=>{
    input.value += btnadd.value;
})
btnsub.addEventListener ('click', ()=>{
    input.value += btnsub.value;
})
btnmulti.addEventListener ('click', ()=>{
    input.value += btnmulti.value;
})
btnequal.addEventListener ('click', function() {
    const answer = display.value;
    // I'm using it to test for errors in the users answer which is being evaled
    try {
        const result = eval(answer); 
        display.value = result;
    }  //used to display error thats found in try block
     catch (error) {
        display.value = "Error";
    }
})

btndiv.addEventListener ('click', ()=>{
    input.value += btndiv.value;                       
})
btnC.addEventListener ('click', ()=>     {
    display.value = "";
})



// let input1 = document.querySelectorAll('[id]')[1]
// let input2 = document.querySelectorAll('[id]')[2]
// let input3 = document.querySelectorAll('[id]')[5]
// let input4 = document.querySelectorAll('[id]')[6]
// let input5 = document.querySelectorAll('[id]')[8]
// let input6 = document.querySelectorAll('[id]')[9]
// let input7 = document.querySelectorAll('[id]')[11]
// let input8 = document.querySelectorAll('[id]')[12]

// btn1.addEventListener ('click', ()=>{
//     input.innerHTML = 1
// }) 
//eval(`${input1.value} * ${input2.value}`);
// Btn2.addEventListener ('click', ()=>{
   
// }) 
// span2.innerText = eval(`${input3.value} 
// + ${input4.value}`);
// Btn3.addEventListener ('click', ()=>{
    
// })

// Btn4.addEventListener ('click', ()=>{
    
// })
//span4.innerText = eval(`${input7.value} / ${input8.value}`);