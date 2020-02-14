let arr = [1, 1, 'd', 'a', 'd', 'b', 'a', 'c', 'd', 'b', 'e', 'e', 'b', 2, 5, 2, 3, 4, 5, 2, 'b']
// let arr = [1, 2, 3, 3, 2, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1]
// let arr = [1,2,3]
const inputShow = document.getElementById("showInput")
const outputShow = document.getElementById("showOutput")

inputShow.innerHTML = `<h2> Input : [${arr}] </h2>`;

const result = (obj) => {
    let value = Object.values(obj)
    let key = Object.keys(obj)
    resultArr = []
    value.forEach((v, index) => {
        if (v === Math.max(...Object.values(obj))) {
            console.log(key[index])
            resultArr.push(key[index])
        }
    });

    outputShow.innerHTML += `<h2> Result : ${resultArr}`
}

const createObj = () => {
    let obj = {}
    let count = 1
    arr = arr.sort()
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0
        if (arr[i] === arr[i + 1]) {
            count += 1
            obj[arr[i]] = obj[arr[i]] + count
        } else {
            obj[arr[i]] = obj[arr[i]] + count
            count = 1
        }
    }
    console.log(obj)
    result(obj)
}


createObj()
// console.log(String(result))