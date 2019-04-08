var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NsMqXegVVkAHkKcMrCFJG79H12Qxtdas&q=postmalone&limit=10&offset=0&rating=G&lang=en";

$(".postMalone").on("click", displayGif());

  function displayGif() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(resposne) {
        console.log(resposne);
    })

}
