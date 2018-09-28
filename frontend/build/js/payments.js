$(document).ready(function() {
    $('#bank').hide();
    $('#account').hide();
    document.getElementById('location').disabled = true;
    $('#cusaddress *').children().prop("disabled", true);
    $('#paymethod').change(function() {
        if (this.value == 'None') {
            $('#bank').hide();
            $('#account').hide();
        } else if(this.value == 'Paypal') {
            $('#bank').hide();
            $('#account').show();
        }  else if(this.value == 'Runpay') {
            $('#bank').hide();
            $('#account').show();
        } else {
            $('#bank').show();
            $('#account').hide();
        }

    });

    $('#change').click(function() {
        if ($('#change').text() == 'Change') {

            $('#change').html('Save');
        $('#cusaddress *').children().prop("disabled", false);

        } else {

            $('#change').html('Change');
        $('#cusaddress *').children().prop("disabled", true);

        }
        
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

    $('#location').change(function() {
        if (this.value == 'None') {
            document.getElementById('saddress').value='20/15 kothalawa Lane, New kandy road, Kaduwella 6000 Srilanka.';
        } else if(this.value == 'Jaffna') {
            document.getElementById('saddress').value= '200/105 nathan lane, New kandy road, Jaffna 40000 Srilanka.';
        }  else if(this.value == 'Mannar') {
            document.getElementById('saddress').value='13/B Marana lane, Vavunya road, Mannar 40005 Srilanka.';
        } else {
            document.getElementById('saddress').value='20/15 kothalawa Lane, New kandy road, Kaduwella 6000 Srilanka.';
        }

    });
});