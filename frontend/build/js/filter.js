$(document).ready(function(){
    // var allInputs = $( ":input" );

    // for(var i = 0; i < allInputs.length; i++) {

    // if( $( 'input[type="checkbox"]:checked' ) )
    //     $( this ).prop('checked', false);
    // }

    // $("#reset").click(function(event) {
    //     $( 'input[type="checkbox"]' ).prop('checked', false);
    // });
    $("#reset").click(function(event){
        event.preventDefault();
        $( 'input[type="checkbox"]' ).prop('checked', false);
    });

});