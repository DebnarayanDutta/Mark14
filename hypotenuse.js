const sides = document.querySelectorAll('.inputarea');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
if(Number(sides[0].value)===0){
outputE1.innerText = "Height can't be zero"
}
else if(Number(sides[1].value)===0) {
    outputE1.innerText = "Base can't be zero"
}
else{
outputE1.innerText = "The length of Hypotenuse is " +  lengthOfHypotenuse
}

}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);