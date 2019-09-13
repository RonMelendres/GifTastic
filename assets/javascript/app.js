var characters = ["Mario", "Link", "Luigi", "Pikachu"];

function displayGif() {

    var character = $(this).attr("data-character");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8sdY7wYFOtrrcOTj2xGSGjj8SIqMafbF&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        // console.log(response.data);
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifVideo = $("<img>");
            gifVideo.attr("src", results[i].images.fixed_height.url);

            gifDiv.attr('data-state', 'still');
            gifDiv.attr('data-still', results[i].images.fixed_height_still.url);
            gifDiv.attr('data-animate', results[i].images.fixed_height.url);


            gifDiv.prepend(p);
            gifDiv.prepend(gifVideo);

            $("#gif-view").prepend(gifDiv);
        }

    });
};

function renderButtons() {

    $("#button-view").empty();
    for (var i = 0; i < characters.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gif-btn");
        newButton.attr("data-character", characters[i]);
        newButton.text(characters[i]);
        $("#button-view").append(newButton);
    }
}

$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    characters.push(gif);
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGif);

renderButtons();

$("#gif-view").on("click", function () {

    var state = $(this).attr("data-state");

    if (state === 'still') {
        var animateURL = $(this).attr("data-animate");
        $(this).attr("src", animateURL);
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

    };

})

// Most of the page works except the animate/still gifs. The code related to this are lines 22-24 and 59-70. I tried putting everything in the click function, however eventually that did not turn up anything. 
// What I believe I could have done was instead "function gifDisplay", it should have been another click function so lines 22-24 could also be functional.
