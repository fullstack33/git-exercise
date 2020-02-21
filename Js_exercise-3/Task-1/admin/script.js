const displayName = document.querySelector('#displayName')
const logoutBtn = document.querySelector("#logoutBtn")
const tBody = document.querySelector("tbody")
const row = document.querySelector('.row')

let clickCourseId = '';

const showCourses = (courses) => {
    for (let course of courses) {
        row.innerHTML += `
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-body text-center">
                    <img src="${course.imageUrl}" alt=""
                    width="inherit">
                    <p class="card-text">${course.courseName}</p>
                    <button class="btn btn-block btn-primary" data-toggle="modal" data-target="#myModal"
                    onclick="clickCourse('${course.id}')">Assign
                    Course</button>
                </div>
            </div>
        </div>
        `
    }
}

function showAdminName(admin) {
    displayName.innerHTML = `${admin[0].name}`;
}

const ensureAuthenticate = () => {
    let admin = localStorage.getItem("loginAdmin")
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let courses = JSON.parse(localStorage.getItem('courses') || "[]");
    if (!admin || admin === '') {
        window.location.href = '../signin/index.html'
    } else {
        admin = users.filter((admin) => {
            if (admin.email === JSON.parse(localStorage.getItem("loginAdmin")).email) {
                return admin;
            }
        })
        showAdminName(admin)
        showCourses(courses)
    }
}

const showUserTable = () => {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    tBody.innerHTML = ''
    for (let eachUser of users) {
        if (eachUser.role === 'user') {
            tBody.innerHTML += `
                <tr>
                    <td>${eachUser.name}</td>
                    <td>${eachUser.email}</td>
                    <td><input type="checkbox" id="${eachUser.email}" ${eachUser.courses.indexOf(clickCourseId) >= 0?"checked":''} onclick="assignCourse('${eachUser.email}')"></td>
                </tr>
            `
        }
    }
}

const clickCourse = (course) => {
    let courses = JSON.parse(localStorage.getItem('courses') || "[]");
    clickCourseId = courses[course - 1].id
    showUserTable()
}

function assignCourse(userId) {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    // console.log(userId)
    // console.log(clickCourseId)
    if ((document.getElementById(`${userId}`).checked)) {
        for (let usr of users) {
            if (usr.email === userId) {
                usr.courses.push(clickCourseId)
                console.log(users)
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    } else {
        // alert("Checkbox is unchecked.");
        for (let usr of users) {
            if (usr.email === userId) {
                let index = usr.courses.indexOf(clickCourseId)
                usr.courses.splice(index, index + 1)
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    };
}

function submitCourseForm() {
    let courses = JSON.parse(localStorage.getItem('courses') || "[]");
    let courseName = document.querySelector("#courseName").value
    let courseImageUrl = document.querySelector("#courseImageUrl").value
    let courseUrl = document.querySelector("#courseUrl").value
    if (courseName.trim().length > 0 && courseImageUrl.trim().length > 0 && courseUrl.trim().length > 0) {
        let courseObj = {
            id: courses.length + 1,
            courseName: courseName,
            imageUrl: courseImageUrl,
            courseUrl: courseUrl
        }
        courses.push(courseObj)
        localStorage.setItem("courses", JSON.stringify(courses))
        location.reload(true)
    } else {
        alert("All fields are Required.....!!!")
    }
}

const logout = () => {
    localStorage.setItem("loginAdmin", '')
    window.location.href = '../signin/index.html'
}

logoutBtn.addEventListener('click', () => {
    logout()
})

ensureAuthenticate()