1. Check if the browser supports geolocation.
2. Set options for high accuracy, a 5—second timeout, and no caching.
3. Use watchPosition to track the users location continuously.
4. Emit the latitude and longitude via a socket with "send-location".
5. Log any errors to the console
6. Initialize a map centered at coordinates (0, 0) with a zoom level of 15 using Leaflet. Add OpenStreetMap tiles to the map
7. Create an empty object markers.
8. When receiving location data via the socket, extract id, latitude, and longitude, and center the map on the new coordinates.

9. If a marker for the id exists, update its position, otherwise, create a new marker at the given coordinates and add it to the map.when a user disconnects, remove their marker from the map and delete it from markers."# realTime_tracker" 
