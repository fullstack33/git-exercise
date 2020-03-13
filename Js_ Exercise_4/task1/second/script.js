const output = document.getElementById("output")
let number = 4


for(let i = 0; i < number; i++ ){
    for(let j = 0; j < number; j++){
        if(i+j >= number-1){
            document.write("* ")
        }else{
            document.write("&nbsp&nbsp&nbsp")
        }
    }
    document.write("<br>")
}