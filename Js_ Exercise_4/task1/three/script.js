const output = document.getElementById("output")
let n = 4

for (let i = 0; i < n; i++) {
    let temp = true
    for (let j = 0; j < 2 * n - 1; j++) {

        if (j !== n - 1 - i && temp) {
            document.write("&nbsp&nbsp&nbsp")
        } else {
            if ((n - i - 1) % 2 === j % 2) {
                document.write("* ")
            } else {
                document.write("&nbsp&nbsp&nbsp")
            }
            if (j == parseInt((n * 2 - 1) / 2) + i) {
                temp = true
            } else {
                temp = false
            }
        }
    }
    document.write("<br>")
}