alert("Welcome")
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
let currentIndex = 0;
let nextSetTime = ''
let previousSetTime = ''

box1.innerHTML = `<p> 1 Click Me </p>`
box1.addEventListener('click', () => {
    box3.textContent = "Oops something wrong ?"
})

const changeColorBox2 = (red, green, blue) => {
    box2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

setInterval(function () {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    changeColorBox2(red, green, blue)
}, 3000)


const nextColor = (color) => {
    box4.style.backgroundColor = color;
}

const previousColor = (color) => {
    box4.style.backgroundColor = color;
}


document.addEventListener('keydown', function (event) {
    let colorArr = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e']
    const key = event.key;
    
    if (key === 'ArrowUp' || key === 'ArrowRight') {
        clearInterval(previousSetTime)
        clearInterval(nextSetTime)
        nextSetTime = setInterval(function () {
            if(currentIndex === 5){
                currentIndex = 0
            }
            nextColor(colorArr[currentIndex])
            currentIndex++;
        }, 5000)
    } else if (key === 'ArrowDown' || key === 'ArrowLeft') {
        clearInterval(nextSetTime)
        clearInterval(previousSetTime)
        previousSetTime = setInterval(function () {
            if(currentIndex === -1){
                currentIndex = 4
            }
            previousColor(colorArr[currentIndex])
            currentIndex--;
        }, 5000)
    }
});
