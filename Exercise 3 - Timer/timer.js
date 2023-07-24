let display = document.querySelector(".display")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let reset = document.querySelector(".reset")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let pro = 0

let displayNum = 10
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

function counting(){
    pro = setInterval(function () {
    if (displayNum === 0) {
        reseter()
        clearInterval(pro);
    }
    else {
        displayNum--
    }
    display.textContent = displayNum
    

}, 1000)
}

stop.addEventListener("click", function(){
    start.classList.toggle("hidden")
    stop.classList.toggle("hidden")
    stopo()

})

reset.addEventListener("click", function(){
    reseter()
})


function stopo(){
    clearInterval(pro)
}

function reseter(){
    displayNum = 0
    start.classList.remove("hidden")
    stop.classList.add("hidden")
    display.textContent = displayNum
    clearInterval(pro);
}

