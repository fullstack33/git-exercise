let firstChar = document.getElementById("firstChar")
let secondChar = document.getElementById("secondChar")
let diff = document.getElementById("diff")
let btn = document.getElementById("btn")
let arr = []
let output = document.getElementById("output");

function show() {
    console.log(arr)
    output.innerHTML = `<h2>Result : [${arr}]</h2>`
    arr = []
}

function num_string_range(first, last, diff = 1) {
    let start = Number(first.charCodeAt());
    let end = Number(last.charCodeAt());
    console.log(start, end)
    if (start < end) {
        for (let i = start; i <= end; i) {
            arr.push(String.fromCharCode(i))
            i += diff;
        }
    } else {
        for (let i = start; i >= end; i) {
            arr.push(String.fromCharCode(i))
            i -= diff;
        }
    }
    show()
}

function simpleCount(first, last, diff) {
    if (+first < +last) {
        for (let i = +first; i <= last; i) {
            arr.push(i);
            i += diff
        }
    } else {
        for (let i = +first; i >= last; i) {
            arr.push(i);
            i -= diff
        }
    }
    console.log(arr)
    show()
}


function checkNumberValidation() {
    if (diff.value >= 1) {
        num_string_range(firstChar.value, secondChar.value, +(diff.value))
    } else {
        alert("Enter some Number in last input box...!")
    }
}


btn.addEventListener('click', () => {
    let reLowerCase = /[a-z]/
    let reUpperCase = /[A-Z]/
    let reNumber = /[0-9]/

    if (!(firstChar.value.search(reLowerCase)) && !(secondChar.value.search(reLowerCase))) {
        checkNumberValidation()
    } else if (!(firstChar.value.search(reUpperCase)) && !(secondChar.value.search(reUpperCase))) {
        checkNumberValidation()
    } else if (!(firstChar.value.search(reNumber)) && !(secondChar.value.search(reNumber))) {
        // checkNumberValidation()
        simpleCount(firstChar.value, secondChar.value, +(diff.value))
    } else {
        alert("Starting charcter and ending character Should be same Type ....!")
    }
})