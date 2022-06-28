// Starts quiz when button is clicked
var startButton = document.querySelectorAll("#startQuiz")
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button clicked");
})

var quizContainer = document.querySelectorAll("quiz");

// Array for quiz questions
var quizQuestions = [ 
    {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Having Many Laughs", "Hypertension Marker Linguistics"],
    answer: "HypertextMarkup Language"
    },
    {
    question: "A set of statements that performs a task or calculates a value is ___",
    options: ["An object", "A function", "Scope"],
    answer: "A function"
    },
    {
    question: "",
    options: ["Brendan Eich", "Tim Berners-Lee", "Bill Gates"],
    answer: "Brendan Eich"
    },
];

// Variable for penalty when a question is answered incorrectly
var penalty = 5;
// Creates timer for countdown of quiz
var timer = document.getElementById("countdown");

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeLeft.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            clearInterval(timeInterval);
            timeLeft.textContent = "You're time is up!";
        }
    }, 1000);
}

countdown();

// Function to display the quiz questions in order
function quizQuestions(){
    var output = [];
}

submitBtn.addEventListener("click", showResults);

// Displaying scores and initials at the end 
// function getScore(form) {
//     showCorrectAnswers();

//     var score = 0;
//     for (i = 0, i++);
// }


var highScore = document.querySelector("#highscore");

var totalScores = localStorage.setItem("totalScores");
localStorage.setItem("totalScores", totalScores);
