const questions = [

    {
        question: "Question 1. How do You list files in a directory using a Linux command?",
        answer: "ls"
    },
    {
        question: "Question 2. What command is used to create a new directory in Linux?",
        answer: "mkdir"
    },
    {
        question: "Question  3. How can You navigate to a different directory in Linux?",
        answer: "cd"
    },
    {
        question: "Question 4. What command is used to copy files in Linux?",
        answer: "cp"
    },
    {
        question: "Question 5. How can You move files or directories in Linux?",
        answer: "mv"
    },
    {
        question: "Question 6. What command is used to delete files in Linux?",
        answer: "rm"
    },
    {
        question: "Question 7. How do You find information about a command in Linux?",
        answer: "man"
    },
    {
        question: "Question 8. What command is used to display the current date and time in Linux?",
        answer: "date"
    },
    {
        question: "Question 9. How do You display the current working directory in Linux?",
        answer: "pwd"
    },
    {
        question: "Question 10. How can You shut down or restart a Linux system using a command?",
        answer: "shutdown"
    }
]
let score = 0
let currentQuestionIndex = 0
let answers = [];

const questionElement = document.getElementById('questionText')
const nextQuestion = document.getElementById('next')
const reset = document.getElementById('reset')
const point = document.getElementById('points-value')


function start() {
    score = 0
    currentQuestionIndex = 0;
    point.innerHTML = score
    nextQuestion.innerHTML = "Next";
    showQuestions()
    answers = []
    const userAnswer = document.getElementById('answer').value = ""

}

function showQuestions() {
    let currentQuestion = questions[currentQuestionIndex]
    questionElement.innerHTML = currentQuestion.question
    const answer = document.getElementById('answer').value = ''
    point.innerHTML = score
}

function showScore() {
    const answer = document.getElementById('answer').value = ''
    questionElement.innerHTML = `You scored ${score} out of 10`
    nextQuestion.innerHTML = "Start again"
    point.innerHTML = score
}

function handleNextButton() {
    const answer = document.getElementById('answer').value.trim().toLowerCase()
    answers.push(answer)

    if (answers[currentQuestionIndex] === questions[currentQuestionIndex].answer) {
        score++
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions()
    } else {
        showScore()
    }
}

nextQuestion.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        start()
    }
})
reset.addEventListener("click", () => {
    score = 0
    start()
})


start()

