const displayName = document.querySelector('#displayName')
const logoutBtn = document.querySelector("#logoutBtn")

const showCourses = (user) => {
    let courses = JSON.parse(localStorage.getItem('courses') || "[]");
    for (let i = 0; i < user[0].courses.length; i++) {
        console.log(user[0].courses[i])
        document.querySelector(".row").innerHTML += `
            <div class="col-sm-6 col-md-4">
                <a class="card" href="${courses[user[0].courses[i]-1].courseUrl}" target="_blank">
                    <div class="card-body text-center">
                        <img src="${courses[user[0].courses[i]-1].imageUrl}" alt="" width="inherit">
                        <p class="card-text">${courses[user[0].courses[i]-1].courseName}</p>
                    </div>
                </a>
            </div>
        `
    }
}

const showUserName = (user) => {
    displayName.innerHTML = `${user[0].name}`
}

const ensureAuthenticate = () => {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let user = localStorage.getItem("loginUser")
    if (!user || user === '') {
        window.location.href = '../signin/index.html'
    } else {
        user = users.filter((user) => {
            if (user.email === JSON.parse(localStorage.getItem("loginUser")).email) {
                return user;
            }
        })
        showUserName(user)
        showCourses(user)

    }
}

const logout = () => {
    localStorage.setItem("loginUser", '')
    window.location.href = '../signin/index.html'
}

logoutBtn.addEventListener('click', () => {
    logout()
})

ensureAuthenticate()