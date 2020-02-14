const inputString = document.getElementById("inputString")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const removeTag = () => {
    output.innerHTML = `Result : ${inputString.value}`
}

btn.addEventListener('click', ()=> {
    console.log(inputString.value)
    removeTag()
})