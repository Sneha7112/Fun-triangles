const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hypo-btn");
const outputE1 = document.querySelector('#output');
function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    console.log(sumOfSquares);
    return sumOfSquares;
}
function calculateHypotenuse (){
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypo = Math.sqrt(sumOfSquares);

outputE1.innerText = "The Length of Hypotenuse is: " +  lengthOfHypo;
}
hypoBtn.addEventListener("click",calculateHypotenuse);