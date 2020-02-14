const showAddFieldBtn = document.getElementById("showAddFieldBtn");
const showDeleteFieldBtn = document.getElementById("showDeleteFieldBtn");
const addInputField = document.getElementById("addInputField");
const deleteInputField = document.getElementById("deleteInputField");
const inputUserName = document.getElementById("userName");
const inputUserAge = document.getElementById("userAge");
const userInsertPosition = document.getElementById("userInsertPosition");
const userDeletePosition = document.getElementById('userDeletePosition')
const addNewUserBtn = document.getElementById('addNewUserBtn')
const deleteUserBtn = document.getElementById("deleteUserBtn")
const userTable = document.getElementById("userTable")

let userArray = [{
        name: 'Abc',
        age: 22
    },
    {
        name: 'Def',
        age: 21
    },
    {
        name: 'Ghi',
        age: 25
    },
    {
        name: 'Xyz',
        age: 23
    },
    {
        name: 'Mno',
        age: 27
    },
]

let showUserTable = () => {
    userTable.innerHTML = ''
    for (let i = 0; i < userArray.length; i++) {
        userTable.innerHTML += `<tr>
            <td>${userArray[i].name}</td>
            <td>${userArray[i].age}</td>
        </tr>`
    }
}


let addUserInTable = (userName, userAge, insertPosition) => {
    if (insertPosition <= userArray.length) {
        userArray.splice(insertPosition - 1, 0, {
            name: userName,
            age: userAge
        })
        console.log(userArray)
        showUserTable()
    } else {
        alert("Please Enter Vailid Position....!")
    }
    inputUserName.value = ''
    inputUserAge.value = ''
    userInsertPosition.value = ''

}


let deleteUserFromTable = (deletePosition) => {
    console.log(deletePosition)
    if (deletePosition <= userArray.length) {
        userArray.splice(deletePosition - 1, deletePosition)
        showUserTable()
    } else {
        alert("Please Enter Vailid Position....!")
    }
    userDeletePosition.value = ''
}


showAddFieldBtn.addEventListener('click', () => {
    addInputField.style.display = 'initial';
    showAddFieldBtn.style.display = 'none';
    showDeleteFieldBtn.style.display = 'none';
})


showDeleteFieldBtn.addEventListener('click', () => {
    addInputField.style.display = 'none';
    showDeleteFieldBtn.style.display = 'none';
    showAddFieldBtn.style.display = 'none'
    deleteInputField.style.display = 'initial';
})


addNewUserBtn.addEventListener('click', () => {
    console.log("add user Btn click")
    addInputField.style.display = 'none'
    showAddFieldBtn.style.display = 'initial'
    showDeleteFieldBtn.style.display = 'initial'

    addUserInTable(inputUserName.value, +inputUserAge.value, +userInsertPosition.value)
})

deleteUserBtn.addEventListener('click', () => {
    console.log("delte user Btn click")
    deleteInputField.style.display = 'none'
    showAddFieldBtn.style.display = 'initial'
    showDeleteFieldBtn.style.display = 'initial'

    deleteUserFromTable(+userDeletePosition.value)
})


showUserTable()