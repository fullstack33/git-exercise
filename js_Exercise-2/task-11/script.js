const email = document.getElementById("email")
const btn = document.getElementById("btn")
const output = document.getElementById("output")


btn.addEventListener('click', ()=> {
    let arr = []
    arr = email.value.split('')
    let index = arr.indexOf('@')
    let newArr = arr.map((char, i)=> {
        if((3 <= i) && (i < index - 1)){
            return '*'
        }else{
            return char
        }
    })   

    console.log(newArr.join(''))
    output.innerHTML = `<h2> Encoded Email : ${newArr.join('')} </h2>`
})