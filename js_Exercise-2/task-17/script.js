const inputRows = document.getElementById("rows")
const inputColumns = document.getElementById("columns")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const generateTable = (rows, columns) => {
    output.innerHTML = ''

    for (let i = 0; i < rows; i++) {
        output.innerHTML += `<tr id="${i}"></tr>`
        for (let j = 0; j < columns; j++) {
            document.getElementById(`${i}`).innerHTML += `<td>Row-${i} Col-${j}</td>`
        }
    }
}

btn.addEventListener('click', () => {
    let rows = +inputRows.value
    let columns = +inputColumns.value
    generateTable(rows, columns)
})