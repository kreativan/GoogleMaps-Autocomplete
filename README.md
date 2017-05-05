# GoogleMaps-Autocomplete
Simple google maps addresses jquery autocomplete. Start typing to get sugestions...

## php geocode
Also repo include's small php script that can be used with provided autocomplete.
###
Script is pretty simple, just getting all available data about the desiered location.
### Use case?
Well, i needed it for starting & destination locations created by users. I needed more data then city name or address (post_code, country code etc...),
but i didnt want to force users to manually enter all those data (that would be bad ux)...
User enters city name or adress and that input is used for api call via geocode function geocode("citi_name");
Response is all available data for the location.
In my case, i used response data and saved it to db so i can later search for available destinations on site.
###
Use with ivm-gmaps-autocomplete.js in the same repo and u get nice combo for creating destinations.
Run autocomplete input in geocode function and result is 100% valid, unless google map api is drunk :).
