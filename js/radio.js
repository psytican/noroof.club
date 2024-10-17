const playerControl = document.getElementById("player-control");
playerControl.addEventListener("click", function() {
    radioToggle();
});

function radioToggle() {
    var radioPlayer = document.getElementById("radio-player");

    if (radioPlayer === undefined) {
        return;
    }

    if (radioPlayer.paused === true) {
        playerControl.style.backgroundImage = "url('/images/button-stop.svg')";
        radioPlayer.play();
    } else {
        playerControl.style.backgroundImage = "url('/images/button-play.svg')";
        radioPlayer.pause();
    }
}