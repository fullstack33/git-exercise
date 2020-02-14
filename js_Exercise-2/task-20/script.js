const btn = document.getElementById("btn")
const showOutput = document.getElementById("output")
const givenArray = document.getElementById("givenArray")
let personArray = [{
        id: 1,
        name: "John",
        age: 25,
        hobbies: ['reading', 'travelling', 'music']
    },
    {
        id: 2,
        name: "smith",
        age: 27,
        hobbies: ['drawing', 'travelling', 'reading']
    },
    {
        id: 3,
        name: "Bravo",
        age: 30,
        hobbies: ['cricket', 'travelling', 'music']
    },
    {
        id: 4,
        name: "Finch",
        age: 25,
        hobbies: ['reading', 'travelling', 'cricket']
    },
    {
        id: 5,
        name: "xyz",
        age: 25,
        hobbies: ['reading', 'drawing', 'music']
    },
    {
        id: 6,
        name: "abc",
        age: 25,
        hobbies: ['reading', 'travelling', 'singing']
    },
]

let hobbiesObject = {}

let listOfHobbies = () => {
    for (let person of personArray) {
        for (let hobby of person.hobbies) {
            if (hobbiesObject[hobby]) {
                hobbiesObject[hobby].push(person.name)
            } else {
                hobbiesObject[hobby] = [person.name]
            }
        }
    }
    for (let hobby in hobbiesObject) {
        showOutput.innerHTML += `<p><b>${hobby} : [${hobbiesObject[hobby]}]</b></p>`
    }
}

btn.addEventListener('click', () => {
    listOfHobbies()
})

givenArray.innerHTML = `<h4>${JSON.stringify(personArray)}</h4>`