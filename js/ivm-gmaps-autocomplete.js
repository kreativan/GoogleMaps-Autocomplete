$(document).ready(function() {

    $('#location').on('keypress change', function(e) {

        $('#location-results').empty();

        var location = $(this).val();
        if(location.length > 2) {

            $.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+ location +'&sensor=false',
                success: function(data) {
                    console.log(data); // console
                    $('#location-results').append('<li><a title="'+ data.results[0].formatted_address +'">' + data.results[0].formatted_address + '</a></li>');
                }
            });
        }

    });

    $(document).on("click", '#location-results a', function(event) {
        var setValue = $(this).attr('title');
        $("#location").val(setValue);
        $('#location-results').empty();
    });

});
