let firstDate = document.getElementById("firstDate");
let secondDate = document.getElementById("secondDate");
let getDiff = document.getElementById("getDiff");
let output = document.getElementById("output")

function calYears(date1, date2) {
    return Math.abs(Number(date1.split('-')[0]) - Number(date2.split('-')[0]))
}

function calMonths(date1, date2, years) {
    console.log(date1.getDate())
    console.log(date2.getDate())
    if(+date1.getDate() < +date2.getDate()){
        return (years * 12) + (date2.getMonth() - date1.getMonth())
    }else if(+date1.getMonth() === +date2.getMonth()){
        return (years * 12) + (date2.getMonth() - date1.getMonth())
    }else{
        return (years * 12) + (date2.getMonth() - date1.getMonth()) - 1
    }

}

function calWeeks(diffTime) {
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}

function calDays(diffTime) {
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function calHours(diffTime) {
    return Math.ceil(diffTime / (1000 * 60 * 60));
}

function calMinutes(diffTime) {
    return Math.ceil(diffTime / (1000 * 60));
}


function dateDifference(first, second) {
    let date1 = new Date(String(first))
    let date2 = new Date(String(second))
    const diffTime = Math.abs(date2 - date1);
    let minutes = calMinutes(diffTime);
    let hours = calHours(diffTime);
    let days = calDays(diffTime);
    let weeks = calWeeks(diffTime);
    let years = calYears(first, second);
    let months = calMonths(date1, date2, years);


    console.log(minutes, hours, days, weeks, months, years)

    output.innerHTML = `
        <p>${years} Years ${months%12} Months  ${days%30} Days</p>
        <p>${months} Months ${days%30} Days</p>
        <p>${weeks} Weeks ${days%7} Days</p>
        <p>${days} Days</p>
        <p>${hours} Hours</p>
        <p>${minutes} Minutes</p>

    `
}



getDiff.addEventListener('click', () => {
    dateDifference(firstDate.value, secondDate.value)
})