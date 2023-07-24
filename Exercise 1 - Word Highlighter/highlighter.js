let paragraph = document.querySelector("#myParagraph")
let paraText = paragraph.textContent.toLowerCase().split(" ")
let paraObject = {}

for(let i = 0; i < paraText.length; i++){
    if(paraObject.hasOwnProperty(paraText[i])){
        paraObject[paraText[i]]++
    }
    else{
        paraObject[paraText[i]] = 1
    }
}

let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
let fiveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,6)))
let realText = paraText.join(" ")
let lil = realText

for(let o = 0; o < fiveCommon.length; o++){
    lil = lil.replaceAll(`${fiveCommon[o]} `, function (x) {
        return `<span class="pro">${x}</span>`;
      });
}


paragraph.innerHTML = lil


    
