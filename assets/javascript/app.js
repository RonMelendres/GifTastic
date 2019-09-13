var characters = ["mario", "link", "luigi", "cat"];

function renderButtons() {

    $("#button-view").empty();
    for (var i = 0; i < characters.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gif-btn");
        newButton.attr("data-name", characters[i]);
        newButton.text(characters[i]);
        $("#button-view").append(newButton);
    }
}

function displayGif() {
    var character = $(this).attr("data-character");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8sdY7wYFOtrrcOTj2xGSGjj8SIqMafbF&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function (response) {
        var gifDiv = $("<div class='gif>");

        console.log(response);
        var rating = response.rating;

        $("#gif-view").empty();
        var p = $("<p>").text("Rating: " + rating);

        gifDiv.append(p);

        $("#gif-view").prepend(gifDiv);

    });

}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    characters.push(gif);
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGif);

renderButtons();





// // this is the main section that pulls gifs from giphy and from the button div in html
// // function displayGif() {

// var characters = ["mario", "link", "luigi", "cat"];


// function renderButtons() {
//     // renderButtons.empty();
//     $("#button-view").empty();
//     for (var i = 0; i < characters.length; i++) {
//         var newButton = $("<button>");
//         newButton.addClass("gif-btn");
//         newButton.attr("data-name", characters[i]);
//         newButton.text(characters[i]);
//         $("#button-view").append(newButton);
//     }
// }

// renderButtons();

// $("button").on("click", function () {
//     event.preventDefault();
//     var character = $("#gif-input").val().trim();
//     characters.push(character);
//     renderButtons();

//     var character = $(this).attr("data-character");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8sdY7wYFOtrrcOTj2xGSGjj8SIqMafbF&q=" + character + "&limit=10&offset=0&rating=PG&lang=en";


//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $("<div>");
//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var characterImage = $("<img>");

//                 characterImage.attr("src", results[i].images.fixed_height.url);
//                 // still
//                 // animate
//                 // state
//                 // div

//                 gifDiv.prepend(p);
//                 gifDiv.prepend(characterImage);

//                 $("#gif").prepend(gifDiv);
//             }

//         })

//         $(document).on("click", ".gif-btn", displayGif);


//         function displayGif() {
//             var gifDiv = $("<div>");
//             $("#gif-view").prepend(gifDiv);
//         }

//         renderButtons();
// })


// $("#add-gif").on("click", function (event) {
//     event.preventDefault();
//     var character = $("#gif-input").val().trim();

//     characters.push(character);
//     renderButtons();

//     // gifDiv.prepend(p);
//     // $("#gif").prepend(gifDiv);
// });



// // $(".gif").on("click", function () {
// //     var state = $(this).attr("data-state");
// //     if (state === 'still') {
// //         var animateURL = $(this).attr(queryURL);
// //         $(this).attr("src", animateURL);
// //         $(this).attr("data-state", "animate");
// //     } else {
// //         $(this).attr("src", $(this).attr("data-still"));
// //         $(this).attr("data-state", "still");

// //     };


// // })
