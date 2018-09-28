$(document).ready(function(){

    $('#searchTxt').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $("#searchResults").load('/frontend/searchResults.html');
        }
    });

    $('#searchBtn').click(function () {
        $("#searchResults").load('/frontend/searchResults.html');
    });

    $('#filterBtn').click(function () {
      $("#filter").load('/frontend/filter.html');
    });

});