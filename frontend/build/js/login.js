$(document).ready(function () {
    if (localStorage.getItem('token')) {
        window.location.href = "frontend/home.html";
        return;
    }

    $("#login").click(function (event) {
        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (username == "" || password == "") {

                swal({title: "Error", text: " Email and Password are Required!" , type: "error"});

            return;
        }
        else{
            localStorage.setItem('token', username);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            location.href = "/frontend/home.html";

        }
        
    });
})