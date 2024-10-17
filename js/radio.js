function radioToggle() {
    var radioPlayer = document.getElementById("radio-player");

    if (radioPlayer === undefined) {
        return;
    }

    let playerControl = document.getElementById("player-control");

    if (radioPlayer.paused === true) {
        playerControl.src = "/images/button-stop.svg";
        radioPlayer.play();
    } else {
        playerControl.src = "/images/button-play.svg";
        radioPlayer.pause();
    }
}