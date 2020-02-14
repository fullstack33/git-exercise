const tbody = document.getElementById("tbody");
const output = document.getElementById("output")
const sortByAge = document.getElementById("sortByAge")
const sortByName = document.getElementById("sortByName")

let personArray = [{
        id: 1,
        name: 'KL Rahul',
        age: 26
    },
    {
        id: 2,
        name: 'Rohit Sharma',
        age: 32
    },
    {
        id: 3,
        name: 'Shikhar Dhawan',
        age: 33
    },
    {
        id: 4,
        name: 'Virat Kohli',
        age: 32
    },
    {
        id: 5,
        name: 'Shreyas Iyer',
        age: 26
    },
    {
        id: 6,
        name: 'Manish Pandey',
        age: 27
    },
    {
        id: 7,
        name: 'MS Dhoni',
        age: 38
    },
    {
        id: 8,
        name: 'Rishabh Pant',
        age: 28
    },
    {
        id: 9,
        name: 'Jasparit Bhumrah',
        age: 29
    },
    {
        id: 10,
        name: 'Kedar Jadav',
        age: 29
    },
    {
        id: 11,
        name: 'Bhuvneshwar Kumar',
        age: 30
    },
]



const compare = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}


const sortTableByAge = (query) => {
    console.log(query)
    if (query === 'age') {
        personArray.sort((a, b) => {
            return a.age - b.age
        })
    } else {
        personArray.sort(compare);
    }

    output.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody id="outputtbody">
        </tbody>
    </table>`

    for (let i = 0; i < personArray.length; i++) {
        document.getElementById("outputtbody").innerHTML += `
            <tr>
                <td>${personArray[i].id}</td>
                <td>${personArray[i].name}</td>
                <td>${personArray[i].age}</td>
            </tr>
        `
    }
}

const showTable = () => {
    for (let i = 0; i < personArray.length; i++) {
        tbody.innerHTML += `
            <tr>
                <td>${personArray[i].id}</td>
                <td>${personArray[i].name}</td>
                <td>${personArray[i].age}</td>
            </tr>
        `
    }
}


sortByAge.addEventListener('click', () => {
    sortTableByAge('age')
})

sortByName.addEventListener('click', () => {
    sortTableByAge('name')
})


showTable()