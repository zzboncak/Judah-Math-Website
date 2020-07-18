//globals
let score = 0;
let tryCount = 0;
let correctAnswer;
let mathOperation;
let multiplicationFactor;

function renderForm() {
    //this function will render the quiz form to the page
    $('#start-form').addClass("hidden");
    $('#quiz-form').removeClass("hidden");
    $('.results').addClass("hidden");
    document.getElementById('number').focus();
    generateNumbers();
}

function startQuiz(operation) {
    mathOperation = operation;
    $('#start-form').addClass("hidden");
    if (operation === 'addition') {
        $('#math-operation').text('+');
    } else if (operation === 'multiplication') {
        $('#math-operation').text('x');
    }
    $('#quiz-form').removeClass("hidden");
    $('.results').addClass("hidden");
    document.getElementById('number').focus();
    generateNumbers(mathOperation);
}

function generateNumbers(operation) {
    // this function will generate two random numbers between 1 and 10 to appear in the h2 tag

    let num1 = Math.ceil(Math.random()*10);
    let num2 = multiplicationFactor ? Math.ceil(Math.random() * multiplicationFactor) : Math.ceil(Math.random() * 10);
    $('#num1').text(num1);
    $('#num2').text(num2);

    correctAnswer = mathOperation === 'addition' ? num1 + num2 : num1 * num2;
    console.log(correctAnswer);
    // correctAnswer = num1 * num2;
}

function renderResults(result) {
    //this function will display in the results section if the input was correct or incorrect
    $('#quiz-form').toggleClass("hidden");
    if(result === true) {
        $('.results-correct').toggleClass("hidden");
    } else if (result === false) {
        $('.results-wrong').toggleClass("hidden");
    }
}

function renderScore() {
    //this function is responsible for rendering the current score to the page
    $('#score').text(score);
    $('#try-count').text(tryCount);
}

//event listeners
$('#generate').click(generateNumbers);
$('#addition-start-button').click(e => startQuiz('addition'));
$('#multiplication-start-button').click(e => startQuiz('multiplication'));
$('#result-right').click(renderForm);
$('#result-wrong').click(renderForm);
$('#quiz-form').submit(event => {
    event.preventDefault();
    let userAnswer = $('#number').val();
    if (userAnswer == correctAnswer) {
        renderResults(true);
        score += 1;
        tryCount += 1;
        renderScore();
        $('#number').val("");
        document.getElementById("result-right").focus();
    }
    else {
        renderResults(false);
        tryCount += 1;
        renderScore();
        $('#number').val("");
        document.getElementById("result-wrong").focus();
    }
});