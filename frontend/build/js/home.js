$(document).ready(function(){
    // var username = localStorage.getItem('name');
    // document.getElementById("userwelcome").innerHTML = username;
    // document.getElementById("username").innerHTML = username;

    $("#logout1, #logout2").click(function () {
        localStorage.clear();
        location.href = "/";
      });
    //filter
    $('#filterBtn').click(function () {
        $("#filterDiv").load('/frontend/filter.html', function() {
            $.getScript('frontend/build/js/filter.js');
        });
      });

    // form 3 
    // $('.form_I_3').click(function () {
    //     $("#forms").load('form3.html', function() {
    //         $.getScript('/build/js/form3.js');
    //     });
    //   });
});