let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")
let output = document.getElementById("output")

let arr1 = ['a', 'b', 'c', 'd', 'e']
let arr2 = ['a', 'g', 'f', 'd', 'e']

firstInput.innerHTML = `<h2>First Input Array: [${arr1}] </h2>`
secondInput.innerHTML = `<h2>Second Input Array: [${arr2}] </h2>`


const union = () => {
    let result = [...new Set(arr1.concat(arr2))]
    console.log("union: ", result)
    output.innerHTML = `<h2>Union : [${result}] </h2>`
}

const diff = () => {
    let ar1 = [...arr1]
    for (let i = 0; i < arr2.length; i++) {
        if (ar1.indexOf(arr2[i]) >= 0) {
            ar1.splice(ar1.indexOf(arr2[i]), ar1.indexOf(arr2[i]) + 1)
        }
    }
    console.log("diff:", ar1)
    output.innerHTML = `<h2>Union : [${ar1}] </h2>`
}