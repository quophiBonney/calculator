function addTwoNum() {
    let firstNum = document.getElementById("firstNumber") 
    let secondNum = document.getElementById("secondNumber");
    let answer = document.getElementById("answer");
    let total = Number(firstNum.value) + Number(secondNum.value);
    answer.innerHTML = firstNum.value + '+' + secondNum.value + '=' + total;
}
function subtractTwoNum() {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = firstNum - secondNum;
    answer.innerHTML = firstNum + '-' + secondNum + '=' + total;
}
function multiplyTwoNum() {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = firstNum * secondNum;
    answer.innerHTML = firstNum + '*' + secondNum + '=' + total;
}
let divideTwoNum = () => {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = firstNum / secondNum;
    answer.innerHTML = firstNum + '/' + secondNum + '=' + total;
}
//Object that contains array items
const stocks = {
    fruits: ["strawberry", "ginger"],
    liquid: ["water", 'soup'], 
    container: ["cone", "bowl", "plate"],
    toppings: ["chocolate", "peanuts"]
}
//JavaScript Callbacks
let order = (call_production) => {
    setTimeout(()=> {
        console.log(`${stocks.fruits[0]} order is being placed`)
    }, 2000)
 
    call_production()
}
let production = () => {
   setTimeout(()=> {
    console.log(`production has started`)
    setTimeout(()=>{
     console.log("Cut the fruit")
     setTimeout(()=> {
        console.log(`${stocks.liquid[0]} was added to the fruit`)
        setTimeout(()=> {
            console.log("The machine is started....")
            setTimeout(()=>{
             console.log(`${stocks.container[0]} was selected`)
             setTimeout(()=> {
                console.log(`${stocks.toppings[0]} has been selected as toppings`)
                setTimeout(()=>{
                    console.log(`Serve the customer with the ${stocks.fruits[0]}`)
                }, 2000)
             }, 3000)
            }, 2000)
        }, 1000)
     }, 1000)
    }, 2000)
   }, 2000)
}
order(production)
//The arrangement is referred to as the callback hell, promises have cleaner arrangement over callbacks