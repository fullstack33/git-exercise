const checkAuthentication = (email, password) => {
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    for(let user of users){
        if(user.email === email && user.password === password){
            if(user.role === 'user'){
                localStorage.setItem("loginUser", JSON.stringify(user))
            }else{
                localStorage.setItem("loginAdmin", JSON.stringify(user))
            }
            return user.role
        }
    }
}

function submitForm() {
    const email = document.forms["signinForm"]["email"].value;
    const password = document.forms["signinForm"]["password"].value;

    if ((email.length > 0) && (password.length > 0)) {
            let role = checkAuthentication(email, password)
            
            console.log("User Role",role)
            if(role === 'user'){
                window.location.href = '../user/index.html'
                return false
            }else if(role === 'admin'){
                window.location.href = '../admin/index.html'
                return false
            }else{
                alert("Invailid Email or Password ")
                window.location.href = '../signin/index.html'
                return false
            }
    } else {
        console.log("invailid")
        alert("All fields must be filled out");
        return false;
    }
}