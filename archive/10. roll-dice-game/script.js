const rollOneBtn = document.querySelector("#roll-one")
const rollTwoBtn = document.querySelector("#roll-two")
const resultOne = document.querySelector("#result-one")
const resultTwo = document.querySelector("#result-two")
const message = document.querySelector("#message")

let numberOne
let numberTwo

function compareBothResult(){
    if(numberOne > numberTwo){
        message.textContent = "Player 1 won!"
    }

    if(numberTwo > numberOne){
        message.textContent = "Player 2 won!"
    }

    if(numberOne === numberTwo){
        message.textContent = "It's a tie!"
    }
}

function btnOneOperation(){
    rollOneBtn.disabled = true
    rollOneBtn.style.cursor = "not-allowed"
}

function btnTwoOperation(){
    rollTwoBtn.disabled = true
    rollTwoBtn.style.cursor = "not-allowed"
}

function playerOneRoll(){
    let number = Math.floor((Math.random()*6)+1)
    numberOne = number
    resultOne.textContent = number
    btnOneOperation()
}

function playerTwoRoll(){
    let number = Math.floor((Math.random()*6)+1)
    numberTwo = number
    resultTwo.textContent = number
    btnTwoOperation()
    compareBothResult()
}

rollOneBtn.addEventListener("click", playerOneRoll)
rollTwoBtn.addEventListener("click", playerTwoRoll)