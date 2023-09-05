const base = document.querySelector(".base");
const height = document.querySelector(".height");
const output = document.querySelector('#output');
const areabtn = document.querySelector("#area-btn");
function multiply(b,h){
    const product1 = b * h;
    return product1;
}
function calculateArea(){
    const product = multiply(Number(base.value),Number(height.value));
    const result = 1/2 * product;
    output.innerText = "The Area of the Triangle is:" + result;

}
areabtn.addEventListener('click',calculateArea);
