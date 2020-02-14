const showGivenArray = document.getElementById('showGivenArray')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const output = document.getElementById("output")
let arr = ['a', 'b', 'c', 'd', 'e', 'f']
let newArr;
showGivenArray.innerHTML = `Given Array : [${arr}]`

const firstAndLastN = (n) => {
    if (n <= arr.length) {
        newArr = arr.filter((element, id) => {
            return id > arr.length - n - 1 || id < n;
        });
        console.log(newArr)
        output.innerHTML = `<h2>Result : [${newArr}]</h2>`
    } else {
        alert("Please Enter Number less than Array Length")
    }
}

btn.addEventListener('click', () => {
    firstAndLastN(+input.value)
})

// ======= Second Method =================
// let newArr1 = [];
// let newArr2 = []
// function firstAndLastN(n){
//     for(let i = 0; i<n; i++){
//         newArr1.push(arr[i])
//         newArr2.push(arr[arr.length-n+i])
//     }
//     console.log(newArr1.concat(newArr2))
// }