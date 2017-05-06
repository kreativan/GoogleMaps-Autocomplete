$(document).ready(function() {

    var i = 0;

    // Add input
    $("#add-location").click(function(event) {
        event.preventDefault();
        var markup = '<label>';
            markup += '<input id="' + (i++) + '" class="aditional-input uk-input" type="text" name="addon_location[]"  />';
            markup += '<button class="del-input">delete</button>';
            markup += '</label>';
            $("#aditional-locations").append(markup);
    });

    // delete input
    $(document).on("click", '.del-input', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });

    // gmap ajax autocomplete
    $(document).on("keypress", '.aditional-input', function(event) {

        $('#aditional-results').empty();

        var inputID = $(this).attr('id');
        var addLocation = $(this).val();
        if(addLocation.length > 2) {

            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ addLocation +'&sensor=false',
                success: function(data) {
                    console.log(data); // console
                    $('#aditional-results').append('<li><a href="' + inputID + '" title="'+ data.results[0].formatted_address +'">' + data.results[0].formatted_address + '</a></li>');
                }
            });
        }

        // Asign value on click
        $(document).on("click", '#aditional-results a', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var setValue2 = $(this).attr('title');
            $("#"+href+".aditional-input").val(setValue2);
            $('#aditional-results').empty();
        });

        // remove results if input is less then 3 chars length
        $('.aditional-input').on('change', function(e) {
            var additionalInputVal = $(this).val();
            if( additionalInputVal.length < 2 ) {
                $('#aditional-results').empty();
            }
        });

    });


});
