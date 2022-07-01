// Your Code Here

function runTriviaGame() {
    let userName = window.prompt('Please enter your name:')
    let userScore = 0

    for (i = 0; i < questions.length; i++) {
        let question = questions[i]
        userAnswer = window.prompt(question.text)
        if (userAnswer === question.correctAnswer) {
            userScore += 10
            console.log('correct')
        }
    } // Prompts the questions and adds to the total if answer is correct.

    window.alert('Your score is: '+ userScore)
    promptRetry()
} // this function runs the Trivia Game.

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
} // Prompts the user to retry the trivia game or not.

runTriviaGame() // Executes the game on startup.

