const input = document.getElementById("input")
const output = document.getElementById("output")

let arr = [1, 2, 3, 4, 5, 6]
let randomNum = []
let suffleArr = []

input.innerHTML = `<h2> Input : [${arr}] </h2>`

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6);
}

const suffle = () => {
    while (randomNum.length < 6) {
        let rand = generateRandomNumber()
        if (randomNum.indexOf(rand) === -1) {
            randomNum.push(rand)
            suffleArr.push(arr[rand])
            generateRandomNumber()
        }
    }
    output.innerHTML = `<h2> Suffle Array : [${suffleArr}] </h2>`
    randomNum = []
    suffleArr = []
}

suffle()