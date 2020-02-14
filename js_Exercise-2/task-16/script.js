const inputNum = document.getElementById('inputNum');
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const seperator = () => {
    let num = inputNum.value.toString().split('');
    num.reverse();
    resultNum = ''
    for (let i = 0; i < num.length; i++) {
        if ((i) % 3 == 0) {
            resultNum += ','
        }
        resultNum += num[i];
    }
    num = resultNum.split('');
    num.reverse();
    resultNum = '';
    for (let i = 0; i < num.length - 1; i++) {
        resultNum += num[i];
    }

    output.innerHTML = `<h2>Result : ${resultNum} </h2>`;
    resultNum = '';
    // console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

btn.addEventListener("click", () => {
    if (inputNum.value.length > 0 && inputNum.value.trim() > 0) {
        seperator()
    } else {
        alert("Enter Valid Number")
    }
})