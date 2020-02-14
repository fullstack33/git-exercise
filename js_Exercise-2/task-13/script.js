const inputString = document.getElementById("inputString")
const chunkNum = document.getElementById("chunkNum")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const chopString = (string, num) => {
    let s = ''
    let arr = []
    console.log(string, num)
    for(let i = 0; i < string.length; i){
        for(let j = 0; j < num; j++){
            if(i < string.length){
                s += string[i]
            }
            i++
        }
        arr.push(s)
        s = ''
    }
    console.log(arr)
    output.innerHTML = `<h2>Result : [${arr}]</h2>`

}

btn.addEventListener('click', ()=> {
    chopString(inputString.value, chunkNum.value)
})