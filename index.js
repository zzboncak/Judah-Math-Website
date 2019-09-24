//globals
let score = 0;
let tryCount = 0;
let correctAnswer;

function renderForm() {
    //this function will render the quiz form to the page
    $('#quiz-form').removeClass("hidden");
    $('.results').addClass("hidden");
    document.getElementById('number').focus();
    generateNumbers();
}

function generateNumbers() {
    //this function will generate two random numbers between 1 and 10 to appear in the h2 tag
    let num1 = Math.floor(Math.random()*10) + 1;
    let num2 = Math.floor(Math.random()*10) + 1;
    $('#num1').text(num1);
    $('#num2').text(num2);
    correctAnswer = num1 + num2;
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


function main() {
    renderForm();
    //evaluateInput();
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
}

//event listeners
$('#generate').click(generateNumbers);
$('#result-right').click(renderForm);
$('#result-wrong').click(renderForm);

$(main);