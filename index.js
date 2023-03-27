function randomNote(n) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var image = "images/note" + randomNumber + ".png";

    document.querySelectorAll("img")[n].setAttribute("src", image);
}

function restart() {
    let change = document.querySelectorAll("img").forEach(function(image) {
        image.src = "images/note0.png";
    })
}

function randomAll() {
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var image = "images/note" + randomNumber + ".png";

        document.querySelectorAll("img")[i].setAttribute("src", image);
    } 
}

