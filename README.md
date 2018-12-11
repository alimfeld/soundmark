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
3. Run the following command: node server.js <your MAPS_API_KEY>

## Use

To use soundmarks on your site you have to host the HTML/CSS/JS code and the
soundmarks.json file on your HTTP server (e.g. Apache).

## Browser compatibility

Soundmarks should run in recent versions of most Browsers (Chrome, Firefox,
Edge, Safari). To support IE a couple of polyfills are used (promise and
fetch).
