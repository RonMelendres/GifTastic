var characters = ["Mario", "Link", "Luigi", "Pikachu"];

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