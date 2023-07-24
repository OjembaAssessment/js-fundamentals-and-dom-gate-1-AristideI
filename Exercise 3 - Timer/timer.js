let display = document.querySelector(".display")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let reset = document.querySelector(".reset")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")

let displayNum = 89
display.textContent = displayNum

plus.addEventListener("click", function(){
    displayNum++
    display.textContent = displayNum
})
minus.addEventListener("click", function(){
    displayNum--
    display.textContent = displayNum
})

start.addEventListener("click", function(){
    start.classList.toggle("hidden")
    stop.classList.toggle("hidden")
    counting()
    
    
})

let counting = setInterval(function () {
    if (displayNum === 0) {
        stop()
    }
    else {
        displayNum--
        display.textContent = displayNum
    }
    counter.textContent = countValue


}, 1000)

stop.addEventListener("click", function(){
     start.classList.toggle("hidden")
    stop.classList.toggle("hidden")

})

function stop() {
    clearInterval(counting)
}
