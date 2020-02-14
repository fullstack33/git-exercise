const input = document.getElementById("input");
const btn = document.getElementById("submit");
const result = document.getElementById("result");
const inputShow = document.getElementById("inputshow")


const check = (arr) => {
    let outputArray = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (Number(arr[i]) % 2 === 0 && String(arr[i + 1]) % 2 === 0) {
            outputArray.push(arr[i])
            outputArray.push('-')
        } else {
            outputArray.push(arr[i])
        }
    }
    // console.log(outputArray.join(''))
    result.innerHTML = `<h3>Output :  ${outputArray.join('')} </h3>`
    input.value = '';
    outputArray = []
}


const inserDashAtTwoEven = (input) => {
    input = String(input)
    inputShow.innerHTML = `<h3>Input :  ${input} </h3>`
    check(input)
}


btn.addEventListener('click', () => {
    if (String(input.value).length > 0) {
        inserDashAtTwoEven(Number(input.value))
    } else {
        alert("Please Enter Input")
    }
})