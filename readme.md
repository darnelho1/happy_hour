
#Happy_Hour_App

This app is a Happy Hour Search Engine. Allowing users to search for local happy hours by:
* neighborhood
* cuisine
* bar-type. 

Using the users users location data as the starting reference point we query the google and yelp apis for location data of nearby bars and restaurants that contain a happy hour flag. We then crossreference the returned results with happy hour time information we have have stored in a database. The returned results are sorted based on distance to the user and then displayed. If a returned location has a happy hour going on during the time the user performs their search that returned location will be highlighted. A user can find directions to the any one of the returned locations by selecting one.  

*Contributors Corey Berning & Darnell Holder* 

Map and Geolcation data provided by the [Google API](https://developers.google.com/maps/ "Google API")
Business information provided by [Yelp API](https://www.yelp.com/developers/documentation/v2/overview "Yelp API")

Check out the [Beta Site Here](http://happyhourapp.herokuapp.com/ "Seattle Happy Hour App")
