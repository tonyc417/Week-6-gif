
$("button").on("click", displayGif);

function displayGif() {

    var catergory = $("button").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NsMqXegVVkAHkKcMrCFJG79H12Qxtdas&q=" + catergory + "&limit=10&offset=0&rating=R&lang=en";
    console.log(catergory);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data[i].images.fixed_width.url.length; i++) {
            var image = response.data[i].images.fixed_width.url;

            var newImg = $("<img>");
            newImg.attr("src", image);
            newImg.attr("class", [i]);
        
            var textCard = $("<p>");
            textCard.text("Rating: " + response.data[0].rating);
    
            $("#images").append(newImg, textCard);
            // $(".card-body").prepend(textCard);
            console.log(response);
        }
        // var image = response.data[0].images.original.url;

        // var newImg = $("<img>");
        // newImg.attr("src", image);
        // newImg.attr("class", )
    
        // var textCard = $("<h2>");
        // textCard.text("Rating: " + response.data[0].rating);

        // $(".card").prepend(newImg);
        // $(".card-body").append(textCard);
        // console.log(response);
    })

}