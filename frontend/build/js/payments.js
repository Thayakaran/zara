$(document).ready(function() {
    $('#bank').hide();
    $('#account').hide();
    document.getElementById('location').disabled = true;
    $('#cusaddress *').children().prop("disabled", true);
    $('#paymethod').change(function() {
        if (this.value == 'None') {
            $('#bank').hide();
            $('#account').hide();
        } else if(this.value == 'Paypal/Runpay') {
            $('#bank').hide();
            $('#account').show();
        } else {
            $('#bank').show();
            $('#account').hide();
        }

    });

    $('#change').click(function() {
        $('#change').html('Save');
        $('#cusaddress *').children().prop("disabled", false);
    })

    $('#method').change(function() {
        if (this.value == 'None') {
            document.getElementById('location').disabled = true;
        } else if(this.value == 'Shipping') {
            document.getElementById('location').disabled = true;
        } else {
            document.getElementById('location').disabled = false;
        }

    });
});