//globals
let score = 0;
let num1;
let num2;
let correctAnswer;

function renderForm() {
    //this function will render the quiz form to the page
    $('#quiz-form').removeClass("hidden");
    $('.results').addClass("hidden");
    generateNumbers();
}

function generateNumbers() {
    //this function will generate two random numbers between 1 and 10 to appear in the h2 tag
    num1 = Math.floor(Math.random()*10) + 1;
    num2 = Math.floor(Math.random()*10) + 1;
    $('#num1').text(num1);
    //console.log(num1);
    $('#num2').text(num2);
    //console.log(num2);
    //console.log(`generateNumbers ran!`);
    correctAnswer = num1 + num2;
}

function evaluateInput() {
    //this function will evaluate if the user's input is the sum of the two numbers.
    event.preventDefault;
    let userAnswer = $('#number').val();
    if (userAnswer == correctAnswer) {
        renderResults(true);
        score += 1;
        renderScore();
        $('#number').val("");
    }
    else {
        renderResults(false);
        renderScore();
        $('#number').val("");
    }
    console.log(`evaluateInput ran!`);
}

function renderResults(result) {
    //this function will display in the results section if the input was correct or incorrect
    $('#quiz-form').toggleClass("hidden");
    if(result === true) {
        $('.results-correct').toggleClass("hidden");
    } else if (result === false) {
        $('.results-wrong').toggleClass("hidden");
    }
    console.log(`renderResults ran!`);
}

function renderScore() {
    //this function is responsible for rendering the current score to the page
    $('#score').text(score);
}

$('#submit').click(evaluateInput);

//generates a new number when the button is clicked
$('#generate').click(generateNumbers);
$('#result-right').click(renderForm);
$('#result-wrong').click(renderForm);


renderForm();