var triviaFacts = [
	{
		question: "What is Newton's second law?",
		options: {
			a: 'An object at rest will stay at rest, and an object in motion will stay in motion unless acted on by a net external force',
			b: 'All forces between two objects exist in equal magnitude and opposite direction',
			c: 'The rate of change of momentum of a body over time is directly proportional to the force applied, and occurs in the same direction as the applied force.',
			d: 'None of the above'
		},
		answer: 'c'
	},
	{
		question: 'What is the mass of the smallest stellar black hole currently known to science?',
		options: {
			a: '10.2 Solar Masses',
			b: '5.1 Solar Masses',
			c: '1.2 Solar Masses',
			d: '3.3 Solar Masses'
		},
		answer: 'd'
	},
	{
		question: 'According to modern Super String Theory, how many space-time dimensions are posited to exist?',
		options: {
			a: '4',
			b: '11',
			c: '18',
			d: '26'
		},
		answer: 'd'
	},
	{
		question:
			'What is the statistical probability that the current theory of anthropogenic climate change is wrong?',
		options: {
			a: '17%',
			b: '42%',
			c: '0.0001%',
			d: '3%'
		},
		answer: 'c'
	},
	{
		question:
			'According to the vast majority of scientists, what must humanity do to in order to prevent climate change from crossing the 1.5 degrees Celsius tipping point that would eventually drive humanity to extinction?',
		options: {
			a: 'Put an end to factory farming and unsustainable agriculture',
			b: 'Stop the production and burning of fossil fuels',
			c: 'Ramp up reforestation efforts and put an end to most logging operations',
			d: 'All of the above'
		},
		answer: 'd'
	},
	{
		question:
			'Consider the force of gravity. Given that Force = Mass x Acceleration, what is the approximate average acceleration that we experience on the surface of Earth?',
		options: {
			a: '10.2 m/(s^2)',
			b: '9.8 m/(s^2)',
			c: '6.2 m/(s^2)',
			d: '4 m/(s^2)'
		},
		answer: 'b'
	},
	{
		question: 'Clocking in at a blazing 465 degrees Celsius, what is the hottest planet in our solar system?',
		options: {
			a: 'Venus',
			b: 'Mars',
			c: 'Earth',
			d: 'Mercury'
		},
		answer: 'a'
	},
	{
		question: 'According to quantum mechanics, which of the following are true about our reality?',
		options: {
			a: 'Something can be both a wave and a particle at the same time',
			b: 'Something can be in two places at once',
			c: 'Entangled particles can affect one another instantaneously',
			d: 'All of the above'
		},
		answer: 'd'
	}
];

// use getElementById to select and store the quiz section and the start button
var quiz = document.getElementById("quiz");
var start = document.getElementById("start-button");

// Functions Go Here
function startTimer() {
    // Define countdown starting point
    var timeRemaining = 120;
    // Create paragraph tag to contain count down timer
    var clock = document.createElement("p");
    // set clock's text content to show the time at the start of the counter so that question and time render at the same time
    clock.textContent = "2:00";
    // Append clock element p tag as first child of quiz section
    quiz.appendChild(clock);
    // decrement the time remaining here to sync with the slight delay of the setInterval function
    timeRemaining --;
    // create set interval
    var countDown = setInterval(function() {
        // while time remaining is greater than 60 seconds
        if (timeRemaining > 69) {
            // set clock's text content to show the time remaining
            clock.textContent = "1:" + (timeRemaining - 60);
            // decrement the time remaining during every interval where this if condition is met
            timeRemaining --;
            // while there are more than 10 seconds on the clock
        } // while time remaining is greater than 60 seconds
        else if (timeRemaining > 59) {
            // set clock's text content to show the time remaining
            clock.textContent = "1:0" + (timeRemaining - 60);
            // decrement the time remaining during every interval where this if condition is met
            timeRemaining --;
        
        } else if (timeRemaining > 10) {
            // set clock's text content to show the time remaining
            clock.textContent = "0:" + timeRemaining;
            // decrement the time remaining during every interval where this if condition is met
            timeRemaining --;
            // if there are 10 seconds on the clock, text will turn red
        } else if (timeRemaining > 9) {
            // set color of the clock text to be red to indicate that time is running out
            clock.setAttribute("style", "color: #880808");
            // set clock's text content to show the time remaining
            clock.textContent = "0:10";
            // decrement the time remaining during every interval where this if condition is met
            timeRemaining --;
            // if there are 9 seconds on the clock, text will stay red
        } else if (timeRemaining >= 0) {
            // keep color of the clock text red and start transition to cadmium red background color to initiate more urgency
            clock.setAttribute("style", "color: #880808");
            quiz.setAttribute("style", "background-color: #ee4c2ba4")
            // set clock's text content to show the time remaining
            clock.textContent = "0:0" + timeRemaining;
            // decrement the time remaining during every interval where this if condition is met
            timeRemaining --;
        } else {
            // when timer reaches 0, clock text content is set to an empty string
            clock.textContent = "";
            // and countdown interval function is escaped using clearInterval
            clearInterval(countDown);
            // get rid of the timer
            quiz.removeChild(clock);
        }
        // each interval is 1 second in duration
    }, 1000);
}

var questionIndex = 0;
var numQuestions = 8;

// This is a function to present questions to user with radio button options to choose from accompanied by a submit button
function promptQuestions() {
    // create a new form element to store question, options, and button
    var form = document.createElement("form");
    // add form to the quiz section
    quiz.appendChild(form);
    // add question text p tag
    var questionText = document.createElement("p");
    // add question text element to the form
    form.appendChild(questionText);
    // update question text to reflect the text of the current question
    questionText.textContent = triviaFacts[questionIndex].question;
    // for each question, create a label and an input for each choice
    for (var i = 0; i < numQuestions; i++) {
        // TODO: PUT LOGIC HERE
    }
}

// This is a function to initiate the beginning of the quiz
function startQuiz() {
    console.log("START");
    // hide the start quiz button
    start.setAttribute("style", "display: none");
    // call the startTimer function to start the countdown for the user
    startTimer();
    promptQuestions();
}

// Event listeners for the start quiz button, which when clicked will call the startQuiz function to kick off the sequence of functions that run the application
start.addEventListener("click", startQuiz);


// PSEUDO CODE HERE : 

// Webpage needs to be responsive

// Provide a set of instructions above the start-quiz button that tells the user (1) there will be 8 multiple choice questions and (2) the user will have 120 seconds to read and choose an answer for each question

// if the time permits, add a hint when timer reaches 15 seconds left on the clock

// When the start-quiz button is clicked by the user, the instructions and start-quiz button will disappear

// After instructions and button are removed from view, the user will be prompted with the first question from the array of "trivia" array

// User will be prompted with four radio buttons when submitting answers to quiz questions and will submit answer by clicking submit button

// if the user chooses incorrectly, 10 seconds will be deducted from the timer

// When the user submits an answer, the user will be prompted with another question

// if the user submits responses for all questions, or if the timer runs down to zero, the quiz is over

// when the quiz is over, the user will be presented with (1) their overall score, (2) an associated grade, (3) correct answers for the questions they answered incorrectly (and if time permits, explanations for the correct response), and the option to add their initials and save their score

// user will then be prompted to start over if they choose

