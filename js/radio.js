const playerControl = document.getElementById("player-control");

playerControl.addEventListener("click", radioToggle);

function radioToggle() {
    var radioPlayer = document.getElementById("radio-player");

    if (radioPlayer === undefined) {
        return;
    }

    radioPlayer.addEventListener("waiting", function() {
        playerControl.removeEventListener("click", radioToggle);
        playerControl.style.backgroundImage = "url('/images/loading.gif')";
    });

    radioPlayer.addEventListener("playing", function() {
        playerControl.addEventListener("click", radioToggle);
        playerControl.style.backgroundImage = "url('/images/button-stop.svg')";
    });

    radioPlayer.addEventListener("canplay", function() {
        playerControl.addEventListener("click", radioToggle);
        playerControl.style.backgroundImage = "url('/images/button-play.svg')";
    });

    if (radioPlayer.paused === true) {
        radioPlayer.play();
    } else {
        playerControl.style.backgroundImage = "url('/images/button-play.svg')";
        radioPlayer.pause();
    }
}