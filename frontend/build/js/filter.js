$(document).ready(function(){
    $("#logout1, #logout2").click(function () {
        localStorage.clear();
        location.href = "/";
      });
    //filter
    $('#filterBtn').click(function () {
        $("#filterDiv").load('/frontend/filter.html', function() {
            $.getScript('/frontend/build/js/filter.js');
        });
      });
});