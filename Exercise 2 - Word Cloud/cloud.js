let paragraph = document.querySelector("#myParagraph")
let paraText = paragraph.textContent.toLowerCase().split(" ")
let paraObject = {}
let cloud = document.querySelector("#myWordCloud")

for(let i = 0; i < paraText.length; i++){
    if(paraObject.hasOwnProperty(paraText[i])){
        paraObject[paraText[i]]++
    }
    else{
        paraObject[paraText[i]] = 1
    }
}

let sortedPara = Object.fromEntries(Object.entries(paraObject).sort(([,a], [,b]) => b - a))
let fiveCommon = Object.keys(Object.fromEntries(Object.entries(sortedPara).slice(1,13)))
console.log(fiveCommon)


let one = document.createElement(p)
one.setAttributes("class", "one")
one.textContent = String(fiveCommon[0])
cloud.append(one)

document.body.append(cloud)



    
