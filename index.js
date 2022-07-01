// Your Code Here

userName = window.prompt('Please enter your name:')


for (i = 0; i < questions.length; i++) {
    let question = questions[i]
    userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer) {
        console.log('correct!')
    }
}