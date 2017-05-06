$(document).ready(function() {
    /**
    *   Ajax Autocomplete
    */
    $('.gmap-autocomplete').on('keypress', function(e) {

        var location = $(this).val();
        var parentID = $(this).parent().attr('id');
        var results  = $("#" + parentID + "> ul");

        $(results).empty();

        if(location.length > 2) {

            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ location +'&sensor=false',
                success: function(data) {
                    console.log(data); // console
                    var formattedAddress = data.results[0].formatted_address;
                    $(results).append('<li><a data-input="'+ parentID +'" title="'+ formattedAddress +'">' + formattedAddress + '</a></li>');
                }
            });
        }

    });

    // remove results if input is less then 3 chars length
    $('.gmap-autocomplete').on('change', function(e) {
        var locationValue = $(this).val();
        var parentID = $(this).parent().attr('id');
        var results  = $("#" + parentID + "> ul");
        if( locationValue.length < 2 ) {
            $(results).empty();
        }
    });

    // on result click asign the value
    $(document).on("click", '.gmap-autocomplete-results a', function(event) {
        event.preventDefault();
        var dataInput = $(this).data('input');
        var title = $(this).attr('title');
        var results  = $("#" + dataInput + "> ul");
        $("#" + dataInput + "> .gmap-autocomplete").val(title);
        $(results).empty();
    });


});
