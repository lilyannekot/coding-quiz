// Declares all variables globally
var startBtn = document.getElementById("startQuiz")
var questionContainerEl = document.getElementById("questionContainer")
var questionEl = document.getElementById("questions")
var answerOptionsEl = document.getElementById("answerOptions")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var timeLeft = 60;
var penalty = 5;
var scoreList = document.getElementById('highscore')

// Event listeners for when question buttons have been pressed
startBtn.addEventListener("click", startQuiz) 
btn1.addEventListener("click", checkAnswer)
btn1.addEventListener("click", setNextQuestion)
btn2.addEventListener("click", checkAnswer)
btn2.addEventListener("click", setNextQuestion)
btn3.addEventListener("click", checkAnswer)
btn3.addEventListener("click", setNextQuestion)

// Array for quiz questions
var quizQuestions = [ 
    {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Having Many Laughs", "Hypertension Marker Linguistics"],
    answer: "Hypertext Markup Language"
    },
    {
    question: "A set of statements that performs a task or calculates a value is ___",
    options: ["An object", "A function", "Scope"],
    answer: "A function"
    },
    {
    question: "Who invented Javascript?",
    options: ["Brendan Eich", "Tim Berners-Lee", "Bill Gates"],
    answer: "Brendan Eich"
    },
];

var i = 0

// Causes next question to appear once previous question has been answered
function setNextQuestion() {
    if(i===quizQuestions.length){
        clearInterval(window.timeInterval)
        var userInit = prompt("Enter your initials to save your score!")
        localStorage.setItem(userInit, timeLeft)
        questionContainerEl.classList.add("hide");
        window.timeMessage.classList.add("hide");
        // Loops through local storage in order to display previous results at the end of the quiz
        for (index=0;index<localStorage.length;index++){
        var li = document.createElement('li')
        scoreList.appendChild(li)
        li.textContent = localStorage.key(index) + ': ' + localStorage.getItem(localStorage.key(index))
        }
        return
    }
    questionEl.textContent = quizQuestions[i].question
    btn1.innerText = quizQuestions[i].options[0]
    btn2.innerText = quizQuestions[i].options[1]
    btn3.innerText = quizQuestions[i].options[2]
    i++
    console.log(i)
}

// Penalizes users for answering a question wrong (remove 5 seconds)
function checkAnswer(e) {
    
    if (e.target.innerText !== quizQuestions[i-1].answer) {
        timeLeft -= penalty
    } 
    
}

// Starts quiz: questions are hidden until start button is pressed
function startQuiz() {
    console.log("Quiz has started");
    startBtn.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    document.querySelector('.intro').classList.add("hide");
    scoreList.classList.remove("hide");

    countdown();
    setNextQuestion();
} 

// Creates timer for countdown of quiz
var timer = document.getElementById("countdown");

function countdown() {
    window.timeMessage = document.getElementById("countdown")

     window.timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            window.timeMessage.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            clearInterval(window.timeInterval);
            window.timeMessage.textContent = "You're time is up!";
        }
    }, 1000);
}
