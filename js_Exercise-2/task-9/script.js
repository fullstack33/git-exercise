const inputTimeStamp = document.getElementById("timeStamp")
const btn = document.getElementById('btn')
const outputShow = document.getElementById('output')


const calculateTime = () => {
    console.log(new Date(+inputTimeStamp.value * 1000))
    outputShow.innerHTML = `<h2> Result: ${new Date(+inputTimeStamp.value * 1000).toDateString()} </h2>`
}


btn.addEventListener('click', () => {
    calculateTime()
})