# GoogleMaps-Autocomplete
Simple google maps addresses jquery autocomplete. Start typing to get sugestions...
###
Demo: https://lokomotivan.github.io/GoogleMaps-Autocomplete/

### How to use?
###### Include scripts from '/js' folder.
```
<!-- Start Location -->
<h3>Start Location</h3>
<div id="start-location">
    <input class="gmap-autocomplete uk-input" name="start_location" type="text" placeholder="Enter city or/and addess" />
    <ul class="gmap-autocomplete-results"></ul>
</div>
<!-- End Location -->
<h3>End Location</h3>
<div id="end-location">
    <input class="gmap-autocomplete uk-input" name="end_location" type="text" placeholder="Enter city or/and addess" />
    <ul class="gmap-autocomplete-results"></ul>
</div>
```
##### Dynamic Fields
```
<h4>Aditional Locations</h4>
<div>
    <button id="add-location" class="uk-button uk-button-default">Add Destination</button>
    <div id="aditional-locations"></div>
    <ul id="aditional-results"></ul>
</div>
```

#### Form Example
```
<form action="./" method="post">
    <!-- Start Location -->
    <h3>Start Location</h3>
    <div id="start-location">
        <input class="gmap-autocomplete uk-input" name="start_location" type="text" placeholder="Enter city or/and addess" />
        <ul class="gmap-autocomplete-results"></ul>
    </div>
    <!-- End Location -->
    <h3>End Location</h3>
    <div id="end-location">
        <input class="gmap-autocomplete uk-input" name="end_location" type="text" placeholder="Enter city or/and addess" />
        <ul class="gmap-autocomplete-results"></ul>
    </div>

    <h4>Aditional Destibations</h4>
    <div>
        <button id="add-location" class="uk-button uk-button-default">Add Destination</button>
        <div id="aditional-locations"></div>
        <ul id="aditional-results"></ul>
    </div>
    <div class="uk-margin">
        <input class="uk-button uk-button-primary uk-button-large" type="submit" name="test" />
    </div>
</form>
```

## php geocode
Also repo include's small php script that can be used with provided autocomplete.
###
Script is pretty simple, just getting all available data about the desiered location.
### Use case?
Well, i needed it for starting & destination locations created by users. I needed more data then city name or address (post_code, country code etc...),
but i didnt want to force users to manually enter all those data (that would be bad ux)...
####
User enters city name or adress and that input is used for api call via geocode function `geocode("city_name");`
Response is all available data for the location.
In my case, i used response data and saved it to db so i can later search for available destinations on site.
###
Use with ivm-gmaps-autocomplete.js in the same repo and u get nice combo for creating destinations.
Run autocomplete input in geocode function and result is 100% valid, unless google map api is drunk or something :)
