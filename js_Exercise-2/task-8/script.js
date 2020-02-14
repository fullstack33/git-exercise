let firstDate = document.getElementById("firstDate");
let secondDate = document.getElementById("secondDate");
let getDiff = document.getElementById("getDiff");
let output = document.getElementById("output")

const dateDifference = () => {
    let date1 = new Date(String(firstDate.value))
    let date2 = new Date(String(secondDate.value))
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    output.innerHTML = `<h2> Result : ${diffDays} Days</h2>`
}


getDiff.addEventListener('click', () => {
    dateDifference()
})