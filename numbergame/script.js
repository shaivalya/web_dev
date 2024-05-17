
var numberHeading = document.getElementById("number")
var allButtons = document.getElementsByClassName("btn")
var overlay = document.getElementsByClassName("overlay")[0]
var closeButton = document.getElementsByClassName("close-btn")[0]
var increaseButton = allButtons[0]
var decreaseButton = allButtons[1]

console.log(numberHeading)
console.log(increaseButton)
console.log(decreaseButton)

function increaseHandler(){
    var currentValue = numberHeading.innerText
    currentValue = Number(currentValue)
    if(currentValue === 10){
        overlay.classList.remove("hidden")
    }else{
        currentValue+=1
        numberHeading.innerText = currentValue
        console.log(currentValue)
    }
   
}

function decreaseHandler(){
    var currentValue = numberHeading.innerText
    currentValue = Number(currentValue)
    if(currentValue === -10){
        overlay.classList.remove("hidden")
    }else{
        currentValue-=1
        numberHeading.innerText = currentValue
        console.log(currentValue)
    }
  
}

function closeHandler(){
    overlay.classList.add("hidden")
}



increaseButton.addEventListener('click',increaseHandler)
decreaseButton.addEventListener("click",decreaseHandler)
closeButton.addEventListener("click",closeHandler)