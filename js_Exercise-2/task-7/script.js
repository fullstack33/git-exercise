const date = document.getElementById("date")
const output = document.getElementById("output")
const getMonth = document.getElementById("getMonth")

let monthArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

getMonth.addEventListener('click', () => {
    let month = date.value.split('-')[1]
    if (month !== undefined) {
        console.log(month)
        output.innerHTML = `<h2> Month Name:  ${monthArray[+month - 1]}</h2>`
    }else{
        alert("Give Date in Proper Formate")
    }
})