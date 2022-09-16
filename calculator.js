function addTwoNum() {
    let firstNum = document.getElementById("firstNumber").value 
    let secondNum = document.getElementById("secondNumber").value
    let answer = document.getElementById("answer");
    let total = Number(firstNum) + Number(secondNum)
    let error = document.getElementById("error")
    if(firstNum == "" || secondNum == ""){
        error.innerHTML = "<div class='alert alert-danger'>You are required to type two numbers</div>";
      
    }else {
      answer.innerHTML = firstNum + " + " + secondNum + " = " + total;
    }
}
function subtractTwoNum() {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = Number(firstNum) - Number(secondNum);

    if(firstNum == "" || secondNum === ""){
        error.innerHTML = "<div class='alert alert-danger'>You are required to type two numbers</div>";
    }else {
        answer.innerHTML = firstNum + " - " + secondNum + " = " + total;
    }
  
}
function multiplyTwoNum() {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = Number(firstNum) * Number(secondNum);
   if(firstNum == "" || secondNum == ""){
    error.innerHTML = "<div class='alert alert-danger'>You are required to type two numbers</div>";
   }else {
     answer.innerHTML = firstNum + ' * ' + secondNum + ' = ' + total;
   }
}
let divideTwoNum = () => {
    let firstNum = document.getElementById("firstNumber").value; 
    let secondNum = document.getElementById("secondNumber").value;
    let answer = document.getElementById("answer");
    let total = Number(firstNum) / Number(secondNum);
    if(firstNum == "" || secondNum == ""){
        error.innerHTML = "<div class='alert alert-danger'>You are required to type two numbers</div>";
    }else {
        answer.innerHTML = firstNum + ' / ' + secondNum + ' = ' + total;    
    }

}
const items = {
    fruits : [ 'strawberry', 'ginger', 'pineapple' ] 
}
function order(call_production){
    setTimeout(()=> {
    console.log(`${items.fruits[0]} was ordered`)
    }, 2000)
call_production()
}
function production (){
  setTimeout(()=> {
 console.log("Production has started")
  }, 3000)
}
order(production)
