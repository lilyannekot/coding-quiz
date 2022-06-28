// Starts quiz when button is clicked
var btn = document.getElementById("startButton")
button.addEventListener("click", function() {
    
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

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitBtn = document.getElementById("submit");

// Array for quiz questions
var quizQuestions = [ {
    question: "What does HTML stand for?",
    answer: {
        a: "Hypertext Markup Language",
        d: "Having Many Laughs",
        c: "Hypertension Marker Linguistics"
    },
    correctAnswer: "a"
    },
    {
    question: "A set of statements that performs a task or calculates a value is ___",
    answer: {
        a: "An object",
        b: "A function",
        c: "Scope"
    },
    correctAnswer: "b"
    },
    {
    question: "",
    answer: {
        a: "Brendan Eich",
        b: "Tim Berners-Lee",
        c: "Bill Gates"
    },
    correctAnswer: "a"
    },
];

// Function to display the quiz questions in order
function quizQuestions(){
    var output = [];
}

submitBtn.addEventListener("click", showResults);