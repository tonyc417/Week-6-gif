var cardHead = document.getElementById("card");
var submitChoice = document.getElementById("choice");
var userText = document.getElementById("textField");
var parentButton = document.getElementById("buttons");
var parentImg = document.querySelector(".column");


var celeb = ["Kanye West", "Drake", "Adam Sandler", "Post Malone", "The Beatles", "Led Zeppelin", "Aerosmith", "Red Hot Chili Peppers"];

submitChoice.addEventListener("click", createButton);

document.getElementById("displayAll").addEventListener("click", function(e) {
    if (e.target.nodeName === "IMG") {
        var currentSrc = e.target.src;
        var playGif = currentSrc.replace("480w_s.jpg", "giphy.gif");
        e.target.src = playGif;
    } 
    // else if (e.target.src === playGif) {
    //     var pause = currentSrc.replace("giphy.gif", "480w_s.jpg");
    //     e.target.src = pause;
    //     console.log("it is working");
    // }
})

parentButton.addEventListener("click", function(e) {
    if (e.target.nodeName === "BUTTON") {
        var catergory = e.target.value;
        
        console.log(catergory);
        $.ajax({
            url:"https://api.giphy.com/v1/gifs/search?api_key=NsMqXegVVkAHkKcMrCFJG79H12Qxtdas&q=" + catergory + "&limit=10&offset=0&rating=R&lang=en",
            method: "GET"
        }).then(function(response) {
            console.log(response);
            for (var i = 0; i < response.data[i].images.fixed_width.url.length; i++) {
                var gifHold = document.createElement("div");
                gifHold.className = "column";
                var imageLink = response.data[i].images.fixed_width.url;
                var static = imageLink.replace("200w.gif", "480w_s.jpg");

                // gifHold.append(textCard);

                var newImg = document.createElement("img");
                newImg.src = static;
                gifHold.append(newImg);
                
                var textCard = document.createElement("P");
                textCard.innerText = "Rating: " + response.data[i].rating.toUpperCase();
                gifHold.append(textCard);

                $("#displayAll").append(gifHold);
                
                }
        })
    }
})

function createButton(e) {
    e.preventDefault();
    var newBut = document.createElement("BUTTON");
    newBut.className = "test";
    var newVal = document.createAttribute("value");
    newVal.value = userText.value;
    newBut.setAttributeNode(newVal);
    newBut.innerHTML = userText.value;
    document.getElementById("buttons").prepend(newBut);
}

function displayDefault() {
    $("buttons").empty();
    for (var j = 0; j <celeb.length; j++) {
        var defBut = document.createElement("BUTTON");
        defBut.className = "test";
        var defVal = document.createAttribute("value");
        defVal.value = celeb[j];
        defBut.setAttributeNode(defVal);
        defBut.innerHTML = celeb[j];
        document.getElementById("buttons").prepend(defBut);
        
    }
}

displayDefault();




