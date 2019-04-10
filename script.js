// var newDiv = $("<div>");
// var newText = $("<p>");

$("button").on("click", function() {
    var catergory = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NsMqXegVVkAHkKcMrCFJG79H12Qxtdas&q=" + catergory + "&limit=10&offset=0&rating=R&lang=en";
    console.log(catergory);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        for (var i = 0; i < response.data[i].images.fixed_width.url.length; i++) {
            var imageLink = response.data[i].images.fixed_width.url;

            var newImg = $("<img>");
            newImg.attr("src", imageLink);
            newImg.attr("class", [i]);
        
            var textCard = $("<p>");
            textCard.text("Rating: " + response.data[0].rating);
    
            $(".card").prepend(newImg, textCard);


            // newImage.attr("src", imageLink);
            // newImage.attr("class", [i]);
            // $("#images").append(newImage);
        }
        // var imageLink = response.data[0].images.fixed_width.url;
        // newImage.attr("src", imageLink);
        // $("#images").append(newImage);
        console.log(response);
    })
})


