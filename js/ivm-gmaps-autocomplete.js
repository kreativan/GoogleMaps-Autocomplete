$(document).ready(function() {

    $('#location').keypress(function(){

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

    $('#location').change(function(event) {
        var location = $(this).val();
        if(location.length < 2) {
            $('#location-results').empty();
        }
    });

    $(document).on("click", '#location-results a', function(event) {
        var setValue = $(this).attr('title');
        $("#location").val(setValue);
        $('#location-results').empty();
    });

});
