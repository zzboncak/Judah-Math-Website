//globals
let score = 0;
let num1;
let num2;
let correctAnswer;

function generateNumbers() {
    //this function will generate two random numbers to appear in the h2 tag
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
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
        renderResults("Yes!");
        score += 1;
    }
    else {
        renderResults("Uh, oh. Try again!");
    }
    console.log(`evaluateInput ran!`);
}

function renderResults(result) {
    //this function will display in the results section if the input was correct or incorrect
    $('.feedback').text(result);
    console.log(`renderResults ran!`);
}

$('#submit').click(evaluateInput);

//generates a new number when the button is clicked
$('#generate').click(generateNumbers);

//when the page loads random numbers will be generated to display
generateNumbers();