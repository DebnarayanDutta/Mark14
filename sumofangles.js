const inputs =document.querySelectorAll(".inputarea");
const buttonAngle = document.querySelector("#BtnTriangle");
const display = document.querySelector("#output");
const error = document.querySelector("#error")

function calculateSumOfTriangle (angle1,angle2,angle3){
    const sumofangles = angle1 + angle2 + angle3;
    return sumofangles;
}
 function SumTriangle(){
    error.style.display ="none"
    display.style.display = "none"
     const sumofangles = calculateSumOfTriangle(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
     if(Number(inputs[0].value) <= 0){
         error.style.display = "block";
         error.innerText = "Angle cannot be zero"
     }else if(Number(inputs[1].value) <= 0){
        error.style.display = "block";
        error.innerText = "Angle cannot be zero"
    }else if(Number(inputs[2].value) <= 0){
        error.style.display = "block";
        error.innerText = "Angle cannot be zero"
    }
     else if(sumofangles === 180){
         display.style.display = "block"
         display.innerText = "Yes,this is a Triangle";
     } 
     else  {
        error.style.display = "block";
         error.innerText = "Sorry!,the angles doesn't form a triangle";
     }
     

 }

buttonAngle.addEventListener("click", SumTriangle)
