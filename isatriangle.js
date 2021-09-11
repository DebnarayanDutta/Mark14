const inputs = document.querySelectorAll('.inputarea');
const outputE1 = document.querySelector('#output');
const formData = document.querySelector("#formData")
const checkBtn = document.querySelector("#checkScore")
const scoreDisplay = document.querySelector("#score")

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumofAngles = angle1 + angle2 + angle3;
   // console.log(sumofAngles);
    return sumofAngles;
}

// function isTriangle() {
// const sumofAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
// if(sumofAngles===180){
//     outputE1.innerText = "yay, the angles form a triangle";
// }
// else {
//     outputE1.innerText = "oh oh ! the angles don't form a triangle"
// }
// }


const correctAnswers = ["90","Right Angle"]


checkBtn.addEventListener("click", function checkAnswer(){
    
    let score = 0;
    let index = 0;
    const formResultsObject = new FormData(formData)


    const formResultsArray = formResultsObject.values()

    for(let element of formResultsArray){

        if(element === correctAnswers[index]){
            score = score + 1;
        }
        index = index+1;

    }
    console.log(score)
    scoreDisplay.innerText = score;
})


for(let element=0;element<correctAnswers.length;element++){

}

