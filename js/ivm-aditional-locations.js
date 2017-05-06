$(document).ready(function() {

    var i = 0;

    $("#add-destination").click(function(event) {
        $("#aditional-destinations").append('<label><input id="' + (i++) + '" class="aditional-input uk-input" type="text" name="addon_dest"  /><button class="del_input">delete</button></label>');
    });

    $(document).on("click", '.del_input', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });

    $(document).on("keypress change", '.aditional-input', function(event) {

        $('#aditional-results').empty();

        var inputID = $(this).attr('id');
        var addLocation = $(this).val();
        if(addLocation.length > 2) {

            $.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+ addLocation +'&sensor=false',
                success: function(data) {
                    console.log(data); // console
                    $('#aditional-results').append('<li><a href="' + inputID + '" title="'+ data.results[0].formatted_address +'">' + data.results[0].formatted_address + '</a></li>');
                }
            });
        }

        $(document).on("click", '#aditional-results a', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var setValue2 = $(this).attr('title');
            $("#"+href+".aditional-input").val(setValue2);
            $('#aditional-results').empty();
        });

    });


});
