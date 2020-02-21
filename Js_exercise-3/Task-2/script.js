const nameArr = [
    "Ashish Shah",
    "Rashmin Chhatrala",
    "Yash Dubey",
    "Prakash Jain",
    "Yashraj Singh",
    "Viraj Sinha",
    "Rajesh Kumar",
    "Mahesh Marwadi",
    "Suresh Sahni",
    "Amar Vilas",
    "Virdas Singhania",
    "Rajeshwari Bindra",
    "Birendra Bhalerao",
    "Virendra Bhupati",
    "Bhupendra Singh",
    "Bhuvam Bam",
    "Shri Raj",
    "Prashant Kamle",
    "Kamlesh Tomar",
    "Nawal Kishor",
    "Rishi Kohli",
    "Kunwar Kharwanda",
    "Kartik Koli",
    "Komal Jain",
    "Kartikey Pandey"
]

const showResult = document.getElementById('showResult')

const showSearchResult = (names, value)  =>{
    showResult.innerHTML = ''
    for(let name of names){
        // console.log(name.toLocaleLowerCase().lastIndexOf(value.toLocaleLowerCase()))
        let l = name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase())
        console.log(l, value.length)
        showResult.innerHTML += `
        <a href="#" class="list-group-item list-group-item-action">${name.substring(0, l)}<mark>${name.substring(l, l + value.length)}</mark>${name.substring(l + value.length, name.length)}</a>
        `
    }
}

function search(value) {
    let names = nameArr.filter(name => {
        if(name.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
            return name
        }
    })
    showSearchResult(names, value)
    // console.log(names)
}