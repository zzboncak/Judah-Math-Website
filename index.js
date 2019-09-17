//globals
let score = 0;
let num1;
let num2;

function generateNumbers() {
    //this function will generate two random numbers to appear in the h2 tag
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    $('#num1').text(num1);
    //console.log(num1);
    $('#num2').text(num2);
    //console.log(num2);
    //console.log(`generateNumbers ran!`);
}

function evaluateInput() {
    //this function will evaluate if the user's input is the sum of the two numbers.
    console.log(`evaluateInput ran!`);
}

function renderResults(result) {
    //this function will display in the results section if the input was correct or incorrect
    
    console.log(`renderResults ran!`);
}

$('#generate').click(generateNumbers);

//when the page loads random numbers will be generated to display
generateNumbers();