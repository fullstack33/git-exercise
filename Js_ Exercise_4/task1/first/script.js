const output = document.getElementById("output")
let number = 4
for(let i=0; i < number; i++){
    for(let j = 0; j<=i ;j++){
        output.innerHTML += `*  `
    }
    // console.log(`*`)
    output.innerHTML += '<br>'
}