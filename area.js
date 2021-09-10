const sides = document.querySelectorAll(".inputarea");
const checkBtn = document.querySelector("#areaBtn");
const display = document.querySelector("#display")

function calculatearea(a,b){
let displayarea = 1/2*a*b;
//console.log(displayarea)
return displayarea
}

function totalarea(){
    if(sides[0].value <= 0){
        display.innerText = "Base cannot be zero"
    }else{
        let displayarea = calculatearea(Number(sides[0].value), Number(sides[1].value));
        display.innerText= "Area: "+ displayarea
    }

}

checkBtn.addEventListener("click",totalarea) 