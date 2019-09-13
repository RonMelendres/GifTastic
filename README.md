# GifTastic

## Summary

This page uses the Giphy api and ajax to call for multiple gifs.

##Site Picture

![alttext](assets/images/hw-sample.png)

## Technologies Used

Javascripte and JQuery - Manipulates HTML and contains the functions needed to run the page.

API - This key is used to connect Giphy to the webpage.

Ajax - Used to pull the gifs from Giphy to the app.

## Code Snipit

The snipit shown is part of the function that contains the api link and ajax to receive the gifs.

```js

function displayGif() {

    var character = $(this).attr("data-character");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8sdY7wYFOtrrcOTj2xGSGjj8SIqMafbF&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response.data);
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifVideo = $("<img>");
            gifVideo.attr("src", results[i].images.fixed_height.url);