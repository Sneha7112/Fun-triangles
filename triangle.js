const inputs = document.querySelectorAll('.angleinput');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3){
const sumOfAngles = angle1 + angle2 + angle3;
//console.log(sumOfAngles)
return sumOfAngles;
}
function isTriangle(){
const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value))
if(sumOfAngles === 180){
    
    outputE1.innerText = "yay, The angles form a triangle"
}
else{
     
    outputE1.innerText ="oh oh! The angles dont form a triangles"
}
}
isTriangleBtn.addEventListener("click",isTriangle)