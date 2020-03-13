const personArray = [
    {
        name: "Ravindar",
        sports: ['cheses', 'cricket']
    },
    {
        name: "Ravi",
        sports: ['Football', 'cricket']
    },
    {
        name: "Ram",
        sports: ['Table-Tennis', 'Football']
    }
]

let sportObject = {}

let listOfSport = () => {
    for (let person of personArray) {
        for (let hobby of person.sports) {
            if (sportObject[hobby]) {
                sportObject[hobby].push(person.name)
            } else {
                sportObject[hobby] = [person.name]
            }
        }
    }
}
listOfSport()
console.log(sportObject)