// Your Code Here

function runTriviaGame() {
    let userName = window.prompt('Please enter your name:')
    let userScore = 0

    for (i = 0; i < questions.length; i++) {
        let question = questions[i]
        userAnswer = window.prompt(question.text)
        if (userAnswer === question.correctAnswer) {
            userScore += 10
        }
    }

    window.alert('Your score is: '+ userScore)
    promptRetry()
}

function promptRetry() {
    let retry = window.prompt('Would you like to continue the game? (Y/N):')
    if (retry === 'Y') {
        runTriviaGame()
    }
    else if (retry === 'N') {
        window.alert('Game has ended.')
    }
    else {
        window.alert('That was not a valid response.')
        promptRetry()
    }
}

runTriviaGame()

