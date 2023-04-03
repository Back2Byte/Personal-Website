// ------------------Create list with music note selected------------------ //
var listNotes = [];

$("input").click(function () {
    listNotes = [];
    $(':checked').each(function () {
        src = $(this).prev().attr("src");
        listNotes.push(src);
    })
})

// ------------------Without animation------------------ //
// $("img").click(function () {

//     setInterval(animate(), 100);

//     var randomNumber = Math.floor(Math.random() * 4) + 1;
//     var image = "images/note" + randomNumber + ".png";
//     $(this).attr("src", image);
// })

// ------------------Select a random number------------------ //
function randomNess() {
    if (listNotes.length !== 0) {
        var randomNumber = Math.floor(Math.random() * listNotes.length);
        //return image = "images/boite-musique/note" + randomNumber + ".png";
        return image = listNotes[randomNumber];
    }
}


// ------------------Full reset------------------ //
$("#restart").click(function () {
    if (listNotes.length !== 0) {
        $(".notes img").attr("src", "images/boite-musique/randomBlock.png")
        if (buttonstate) {
            audio = new Audio("music/boite-musique/pause.mp3");
            audio.play();
        }
    }
})

// ------------------Select all blocks at once------------------ //
$("#randomAll").click(function () {
    if (listNotes.length !== 0) {
        $(".notes img").each(function () {
            var randomNumber = Math.floor(Math.random() * listNotes.length);
            var image = listNotes[randomNumber];
            $(this).attr("src", image);
        })
        if (buttonstate) {
            var audio = new Audio("music/boite-musique/1up.mp3");
            audio.play();
        }
    }
})

// ------------------Blocks animations------------------ //
$(".notes img").click(function () {
    if (listNotes.length !== 0) {
        var loop;
        var i = 0;
        var counter = 0;
        var image = this;
        var img = randomNess;
        console.log(img);
        loop = setInterval(function () {
            if (counter < 10) {
                $(image).attr('src', listNotes[i]);
                i++;
                if (i === listNotes.length) {
                    i = 0;
                }
            } else {
                clearInterval(loop);
                i = 0;
                $(image).attr("src", img);
            }
            counter++;
        }, 50);
        if (buttonstate) {
            audio = new Audio("music/boite-musique/coin.mp3");
            audio.play();
        }
    }
});


// ------------------Button Toggle State------------------ //
var buttonstate = 0;

function onoff() {
    buttonstate = 1 - buttonstate;
    var mode;
    if (buttonstate) {
        mode = "icons/boite-musique/volume-up.png";
    } else {
        mode = "icons/boite-musique/volume-down.png";
    }
    $(".onoff img").attr("src", mode);
}