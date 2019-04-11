var cardHead = document.getElementById("card");
var submitChoice = document.getElementById("choice");
var userText = document.getElementById("textField");

var celeb = ["Kanye West", "Drake", "Adam Sandler", "Post Malone", "The Beatles", "Led Zeppelin", "Aerosmith", "Red Hot Chili Peppers"];

for (var j = 0; j < celeb.length; j++) {
    var newBtn = document.createElement("BUTTON");
    newBtn.innerHTML = celeb[j];
    var att = document.createAttribute("value");
    att.value = celeb[j];
    newBtn.setAttributeNode(att);
    document.body.prepend(newBtn);
    console.log(att);
}



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
            textCard.text("Rating: " + response.data[0].rating.toUpperCase());
    
            $("#row").append(newImg, textCard);
        }
        console.log(response);
    })
})

$("#choice").on("click", function() {
    var createNew = $("<button>");
    createNew.attr("value", );
})
