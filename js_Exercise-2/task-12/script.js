const inputString = document.getElementById("character");
const inputStringPosition = document.getElementById("position")
const insertBtn = document.getElementById("btn")
const output = document.getElementById("output")
const initialString = document.getElementById('initialString')
let defaultString = "abc"

initialString.innerHTML = `<h2> Initial String : ${defaultString} </h2>`

const insertString = (string, stringPosition = 1) => {
    let firstString = defaultString.slice(0, stringPosition - 1)
    let newString = inputString.value;
    let lastString = defaultString.slice(stringPosition - 1, defaultString.length)
    defaultString = firstString.concat(newString.concat(lastString))
    output.innerHTML = `<h2> ${defaultString}</h2>`
    inputString.value = ''
    inputStringPosition.value = ''
}


insertBtn.addEventListener('click', () => {
    if(inputStringPosition.value){
        insertString(+inputStringPosition.value)
    }else{
        insertString(0)
    }
})