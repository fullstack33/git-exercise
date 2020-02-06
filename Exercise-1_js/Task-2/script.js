let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let addBtn = document.getElementById("addRecord");
let tbody = document.querySelector('tbody')
let id = 0;
let personArray = []


function show() {
    id = 0
    tbody.innerHTML = ''
    for (let item of personArray) {
        item.id = id++
        tbody.innerHTML += `
            <tr>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td><button onclick="edit(${item.id})" class="edit btn btn-info">Edit</button></td>
                <td><button onclick="del(${item.id})" class="delete btn btn-danger">Delete</button></td>
            </tr>
        `
    }
}

function valueReset(){
    firstName.value = '';
    lastName.value = '';
}

function addDetails() {
    console.log("Add Record")
    if(firstName.value.length > 0 && lastName.value.length > 0){
        let personObj = {
            id: '',
            firstName: firstName.value,
            lastName: lastName.value
        }
        personArray.push(personObj)
        valueReset()
        show()
    }else{
        alert("Please Fill the Input Area....!")
    }
}

function update(id) {
    console.log("Update Record : "+ id)
    obj = personArray[id]
    obj.firstName = firstName.value,
    obj.lastName = lastName.value;
    addBtn.textContent = "Add"
    addBtn.setAttribute("onclick", `addDetails()`)
    valueReset()
    show()
}

function edit(id) {
    console.log("edit : " + id)
    obj = personArray[id]
    firstName.value = obj.firstName
    lastName.value = obj.lastName
    addBtn.textContent = "update"
    addBtn.setAttribute("onclick", `update(${id})`)
}

function del(id) {
    console.log("Delete : "+ id)
    personArray.splice(id, 1)
    show()
}