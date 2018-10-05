
    $("#register").click(function (event) {
        event.preventDefault();
        var data = {};
        data.name = $("#username").val();
        data.type = $("input[type='radio'].flat:checked").val();
        data.email = $("#email").val();
        data.password = $("#password").val();

        if (data.email.trim() == "" || data.password == "") {
            swal({title:"Error", text:"Email and Password are Required!", type:"error"});
            return;
        }
        else{
            swal({title:"Success", text:"Your Account Has Been Created. Please Login", type:"success"}).then(function () {
                location.href='/frontend/login_edit.html';
            });;
            
        }
    });
