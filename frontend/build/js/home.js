$(document).ready(function(){

    if(!localStorage.getItem('token')){
        var x = document.getElementById("myDIV1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    else{
        var x = document.getElementById("myDIV2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    var username = localStorage.getItem('username');
    document.getElementById("userwelcome").innerHTML = username;
    document.getElementById("username").innerHTML = username;

    $("#logout1, #logout2").click(function () {
        localStorage.clear();
        location.href = "/frontend/login_edit.html";
    });

       

    $('#category-view').load('/frontend/popularCategory.html');

    // var username = localStorage.getItem('name');
    // document.getElementById("userwelcome").innerHTML = username;
    // document.getElementById("username").innerHTML = username;

    // $("#logout1, #logout2").click(function () {
    //     localStorage.clear();
    //     location.href = "/";
    //   });

    //filter button
    $('#filterBtn').click(function () {
        $("#filterDiv").load('/frontend/filter.html', function() {
            $.getScript('frontend/build/js/filter.js');
        });
      });


    $('#popular-category').click(function() {

        $('#category-view').load('/frontend/popularCategory.html');

    });


    $('#woman-category').click(function() {

        $('#category-view').load('/frontend/womanCategory.html');

    });

    $('#man-category').click(function() {

        $('#category-view').load('/frontend/manCategory.html');

    });

    $('#kids-category').click(function() {

        $('#category-view').load('/frontend/kidsCategory.html');

    });

    $('#sale-category').click(function() {

        $('#category-view').load('/frontend/saleCategory.html');

    });



    // form 3 
    // $('.form_I_3').click(function () {
    //     $("#forms").load('form3.html', function() {
    //         $.getScript('/build/js/form3.js');
    //     });
    //   });
});