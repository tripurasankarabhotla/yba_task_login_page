function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "" || pass === ""){
        document.getElementById("error").innerText = "Please fill all fields";
    }
    else{
        document.getElementById("error").innerText = "Login successful!";
    }
}