// Starts quiz when button is clicked
document.getElementById("startButton").addEventListener("click", function() {
    var target = document.getElementById("startButton");
    target.
})

// Creates timer for countdown of quiz
var timer = document.getElementById("countdown");

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();