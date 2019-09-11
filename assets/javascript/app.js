$("button").on("click", function () {
    var character = $(this).attr("data-character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8sdY7wYFOtrrcOTj2xGSGjj8SIqMafbF&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var characterImage = $("<img>");
                characterImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(characterImage);

                $("#gif").prepend(gifDiv);
            }
        });
});