<?php
/**
*   Simple geolocation php script usign google maps api
*
*   Gets all available data about the desiered location.
*
*   Use case?
*   Well, i needed it for starting & destination locations created by users. I needed more data then city name or address (post_code, country code etc...),
*   but i didnt want to force users to manually enter all those data (that would be bad ux)...
*   User enters city name or adress and that input is used for api call via geocode function geocode("citi_name");
*   Response is all available data for the location.
*   In my case, i used response data and saved it to db so i can later search for available destinations on site.
*
*   Use with ivm-gmaps-autocomplete.js in the same repo and u get nice combo for creating destinations.
*   Run autocomplete input in geocode function and result is 100% valid, unless google map api is drunk :).
*
*/

function geocode($city) {
    $location = str_replace (" ", "+", $city);
    $details_url = "http://maps.googleapis.com/maps/api/geocode/json?address=" . $location . "&sensor=false";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $details_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $geoloc = json_decode(curl_exec($ch), true);

    // Response
    print_r($geoloc);

    // Lat & Lang
    print_r($geoloc['results'][0]['geometry']['location']['lat']);
    print_r($geoloc['results'][0]['geometry']['location']['lng']);

    // Some Response Parts
    $address            = $geoloc['results'][0]['address_components'];
    $location           = $geoloc['results'][0]['geometry']['location'];
    $formated_address   = $geoloc['results'][0]['formatted_address'];

    // addres sarray
    print_r($address);

    // filter true address array to be sure we are getting data we need
    foreach($address as $item) {
        if($item['types'][0] == 'locality') {
            echo "<h2>City: {$item['long_name']}</h2>";
        }
        if($item['types'][0] == 'country') {
            echo "<h2>Country: {$item['long_name']}</h2>";
        }
    }
}

// Run geo function and Get "Belgrade" data
geocode("Belgrade");
