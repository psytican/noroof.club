function radioToggle() {
    var radioPlayer = document.getElementById("radio-player");

    if (radioPlayer === undefined) {
        return;
    }

    let play = document.getElementById("radio-player-button-play");
    let pause = document.getElementById("radio-player-button-pause");

    if (radioPlayer.paused === true) {
        play.style.display = "none";
        pause.style.display = "block";
        radioPlayer.play();
    } else {
        pause.style.display = "none";
        play.style.display = "block";
        radioPlayer.pause();
    }
}