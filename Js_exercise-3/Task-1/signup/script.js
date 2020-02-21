function saveData(nameData, emailData, roleData, passwordData) {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let userObj = {}
    if (roleData === 'user') {
        userObj = {
            name: nameData,
            email: emailData,
            role: roleData,
            password: passwordData,
            courses: []
        }
    } else {
        userObj = {
            name: nameData,
            email: emailData,
            role: roleData,
            password: passwordData,
        }
    }


    let isUserExist = () => {
        for (let user of users) {
            console.log(user)
            if (user.email === emailData) {
                return true
            }
        }
    }

    console.log(userObj)

    if (isUserExist()) {
        alert("Email Already Exist ....!")
        console.log("user Exist")
        return false
    } else {
        console.log("add New User")
        users.push(userObj)
        localStorage.setItem('users', JSON.stringify(users));
        if(userObj.role === 'user'){
            localStorage.setItem("loginUser", JSON.stringify(userObj))
        }else{
            localStorage.setItem("loginAdmin", JSON.stringify(userObj))
        }
        return userObj.role
    }


}

function submitForm() {
    const fname = document.forms["signupForm"]["fname"].value;
    const email = document.forms["signupForm"]["email"].value;
    const role = document.forms["signupForm"]["role"].value;
    const password = document.forms["signupForm"]["password"].value;
    const confirmPassword = document.forms["signupForm"]["confirmPassword"].value;

    if ((fname.length > 0) && (email.length > 0) && (password.length > 0) && (confirmPassword.length > 0)) {
        if (password !== confirmPassword) {
            console.log("wrong Password")
            alert("Password Not Match....!")
            return false;
        } else {
            let save = saveData(fname, email, role, password)
            if(save === 'user'){
                window.location.href = '../user/index.html'
                return false
            }else if(save === 'admin'){
                window.location.href = '../admin/index.html'
                return false
            }else{
                // alert("Invailid Email or Password ")
                window.location.href = '../signup/index.html'
                return false
            }
        }
    } else {
        console.log("invailid")
        alert("All fields must be filled out");
        return false;
    }
}