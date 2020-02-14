const emailBox = document.getElementById("emailBox");
const btn = document.getElementById('btn')
const right = document.getElementById('right')
const wrong = document.getElementById('wrong')


const checkValidation = () => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (re.test(emailBox.value)) {
        console.log("True")
        right.style.display = 'block'
        wrong.style.display = 'none'
    } else {
        console.log("false")
        wrong.style.display = 'block'
        right.style.display = 'none'
    }
}


btn.addEventListener('click', () => {
    checkValidation()
})