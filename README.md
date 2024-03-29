# Soundmark

Display (and play) a collection of “soundmarks” on a map.

## Prerequisites

Soundmarks are displayed on Google Maps. In order to use Google Maps you need
to obtain an API key.

Refer to the Google Maps Platform documentation for details on API key creation
and restriction.

## Defining soundmarks

Soundmarks are defined in a JSON file.

Refer to the sample file (soundmarks.json) in this repository to learn about
the structure.

## Test

You can run a local Node.js http server to test your soundmarks.

To run the sample proceed as follows:

1. Install Node.js
2. Clone this repository
3. Run the following command: node server.js "YOUR_MAPS_API_KEY"
4. Visit http://localhost:8080 in your Browser

## Use

To use soundmarks on your site you have to host the HTML/CSS/JS (index.html)
code and the soundmarks.json file on your HTTP server (e.g. Apache).

Make sure to replace the MAPS_API_KEY placeholder in index.html with your
actual API key for Google Maps.

## Browser compatibility

Soundmarks should run in recent versions of most Browsers (Chrome, Firefox,
Edge, Safari). To support IE a couple of polyfills are used (promise and
fetch).
