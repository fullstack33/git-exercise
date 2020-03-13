let number = 5
for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        if (i === j) {
            document.write(`*  `)
        }
        else if(j === number-1 - i){
            document.write(`*  `)
        } 
        else {
            document.write("&nbsp&nbsp&nbsp")
        }
    }
    document.write('<br>')
}