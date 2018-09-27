$(document).ready(function(){

    $('#category-view').load('/frontend/popularCategory.html');

    // var username = localStorage.getItem('name');
    // document.getElementById("userwelcome").innerHTML = username;
    // document.getElementById("username").innerHTML = username;

    // $("#logout1, #logout2").click(function () {
    //     localStorage.clear();
    //     location.href = "/";
    //   });

    //form 1
    // $('.form_I_1').click(function () {
    //     $("#forms").load('form1.html', function() {
    //         $.getScript('/build/js/form1.js');
    //     });
    //   });


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