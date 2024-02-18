
// code for user name:
function verifyusername(){
var username = document.getElementById("User_name").value;
var User_name_msg = document.getElementById("User_name_msg");
    if(username.length<5){
        User_name_msg.innerHTML = "Name to short"
        User_name_msg.style.color = "red"
    }else{
        User_name_msg.innerHTML = "Name verified.."
        User_name_msg.style.color = "green"
    }
}

// code for user password:
function verifypassword(){
var Password = document.getElementById("Password").value;
var User_pass_msg = document.getElementById("User_pass_msg");
    if(Password.length<5){
        User_pass_msg.innerHTML = "Name to short"
        User_pass_msg.style.color = "red"
    }else{
        User_pass_msg.innerHTML = "Name verified.."
        User_pass_msg.style.color = "Green" 
    }
}

// coder for login buttion:
function verfiy_btn_login(){
    var username = document.getElementById("User_name").value;  
    var password = document.getElementById("Password").value;
    var login_msg = document.getElementById("login_msg");
    fetch("data.json")
    .then(function(data){
        return data.json();
    })
    .then(function(users){
        for (var user of users){
            if(user.username === username && user.password === password){
                document.write("HI Paul");
            }else{
                login_msg.innerHTML = "Invalid cridetials";
                login_msg.style.color = "red";
            }
        }
    })

}

