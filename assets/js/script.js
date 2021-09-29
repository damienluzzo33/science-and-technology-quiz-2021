var triviaFacts = [
	{
		question: "What is Newton's second law?",
		options: {
			a:
				'An object at rest will stay at rest, and an object in motion will stay in motion unless acted on by a net external force',
			b: 'All forces between two objects exist in equal magnitude and opposite direction',
			c:
				'The rate of change of momentum of a body over time is directly proportional to the force applied, and occurs in the same direction as the applied force.',
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
			c: 'The Sun',
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
var quiz = document.getElementById('quiz');
var start = document.getElementById('start-button');
var footer = document.querySelector('footer');
var body = document.querySelector('body');
// create element in the footer to display the last score that the user has received, if they have one
var lastScore = document.createElement('p');
// Define main global variables
var questionIndex = 0;
var finalScore = 0;
var numQuestions = triviaFacts.length;
var optionsObj, finalGrade, factCheck, clock, form, countDown;
// Define countdown starting point
var timeRemaining = 120;
// create function to fetch user's last score
function fetchData() {
    // get the user's last score from the dom
    var savedScore = JSON.parse(localStorage.getItem('savedScores'));
    // if there are values in the saved scores array
    if (savedScore !== null) {
        // add last score element to the footer of the page
        footer.appendChild(lastScore);
        // display the score and user initials as the lastScore text
        lastScore.textContent = `${savedScore[0]}'s Last Score : ${savedScore[1]}/${numQuestions}`;
    } else {
        // otherwise remove the lastScore element
        lastScore.remove();
    }
}
// call fetchData function to display latest score
fetchData();
// create function to initiate countdown
function startTimer() {
	// Create paragraph tag to contain count down timer
	clock = document.createElement('p');
	// Append clock element p tag as first child of quiz section
	quiz.appendChild(clock);
	// when the timer starts at 120
	if (timeRemaining === 120) {
		// set clock's text content to show the time at the start of the counter so that question and time render at the same time
		clock.textContent = '2:00';
		// decrement the time remaining here to sync with the slight delay of the setInterval function
		timeRemaining--;
	}
	// create set interval function (this is declared globally to allow other functions to allow endGame function to clear interval)
	countDown = setInterval(function() {
		// if the time remaining is greater than 69
		if (timeRemaining > 69) {
			// set clock's text content to show the time remaining
			clock.textContent = '1:' + (timeRemaining - 60);
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			// while time remaining is greater than 59
		} else if (timeRemaining > 59) {
			// set clock's text content to show the time remaining
			clock.textContent = '1:0' + (timeRemaining - 60);
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			// while there are more than 10 seconds on the clock
		} else if (timeRemaining > 10) {
			// set clock's text content to show the time remaining
			clock.textContent = '0:' + timeRemaining;
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			// if there are 10 seconds on the clock, text will turn red
		} else if (timeRemaining > 9) {
			// set color of the clock text to be red to indicate that time is running out
			clock.setAttribute('style', 'color: #880808');
			// set clock's text content to show the time remaining
			clock.textContent = '0:10';
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			// if there are 9 seconds on the clock, text will stay red
		} else if (timeRemaining > 4) {
			// keep color of the clock text red and start transition to cadmium red background color to initiate more urgency
			quiz.setAttribute('style', 'background-color: #ee4c2ba4');
			// set clock's text content to show the time remaining
			clock.textContent = '0:0' + timeRemaining;
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			//otherwise the game is over
		} else if (timeRemaining > 0) {
			// set clock's text content to show the time remaining
			clock.textContent = '0:0' + timeRemaining;
			// decrement the time remaining during every interval where this if condition is met
			timeRemaining--;
			//otherwise the game is over
		} else {
			// set clock's text content to show the time remaining
			clock.textContent = '0:0' + timeRemaining;
			// get rid of the timer
			clock.remove();
			// remove form if it's there
			form.remove();
            // reset background of the quiz
            quiz.setAttribute("style", "background-color: white");
			// call function to show score
            endGame(finalScore);
		}
		// each interval is 1 second in duration
	}, 1000);
}
// This is a function to present questions to user with radio button options to choose from accompanied by a submit button
function promptQuestions() {
	// create a new form element to store question, options, and button
	form = document.createElement('form');
    // give form an id
    form.setAttribute("id", "questionForm")
	// add form to the quiz section
	quiz.appendChild(form);
	// add question text p tag
	var questionText = document.createElement('p');
	// add question text element to the form
	form.appendChild(questionText);
	// update question text to reflect the text of the current question
	questionText.textContent = triviaFacts[questionIndex].question;
	// gather options object for current question
	optionsObj = triviaFacts[questionIndex].options;
	// create line break element to add in form
	var br;
	// for each question, create a label and an input for each choice
	for (var key in optionsObj) {
        // create input for form
		var input = document.createElement('input');
        // give input type of radio
		input.setAttribute('type', 'radio');
        // give input unique id
		input.setAttribute('id', key);
        // set input value
		input.setAttribute('value', key);
        // give input name of option (all radio buttons need to have the same name to be inclusive and make it so clicking one un-checks prior selection if user changes their minds)
		input.setAttribute('name', 'option');
        // add input to the form
		form.appendChild(input);
        // create a label to connect to input
		var label = document.createElement('label');
        // connect label to input
		label.setAttribute('for', key);
        // make label text display the option
		label.textContent = optionsObj[key];
        // add label to the form
		form.appendChild(label);
        // create a line break element
		br = document.createElement('br');
        // add line break element to the form
		form.appendChild(br);
	}
	// create submit button so that user can submit selection
	var submit = document.createElement('button');
    // add id to button
    submit.setAttribute("id", "submitResponse")
	// put button inside of form
	form.appendChild(submit);
	// add text to button that reads "submit"
	submit.textContent = 'Submit';
	// change styles of the submit button
	submit.setAttribute('style', 'background-color: blue; color: white;');
	// add event listener to listen for the click of the submit button
	submit.addEventListener('click', function(event) {
		// prevent default behavior of button
		event.preventDefault();
		// fetch the answer from the array
		var correctAnswer = triviaFacts[questionIndex].answer;
		// query select all inputs into an array
		var allInputs = form.querySelectorAll('input');
		// loop through array of inputs
		for (var element of allInputs) {
			// if the input element has been selected (checked)
			if (element.checked) {
				// put the user's choice in a variable
				var userResponse = element.getAttribute('value');
			}
		}
        // if the value was null because they didn't click the radio button or time ran out
        if (userResponse === null) {
            // log that user was incorrect
			factCheck = 'incorrect';
        } else if (userResponse === correctAnswer) {
			// add 1 to the user's score
			finalScore++;
			// log that user was correct
			factCheck = 'correct';
			// if they got it wrong
		} else {
			// decrement the time remaining
			timeRemaining -= 10;
			// log that user was incorrect
			factCheck = 'incorrect';
		}
		// store the correct answer and if they got it right or not
		localStorage.setItem(questionIndex, JSON.stringify([ userResponse, factCheck ]));
        // if the current in
		if (questionIndex < numQuestions - 1) {
			// increment the question index
			questionIndex++;
			// destroy the current form
			form.remove();
			// call the next question
			promptQuestions();
		} else {
			// destroy the current form
			quiz.removeChild(form);
			// destroy the timer
			// quiz.removeChild(clock);
			// timeRemaining = Infinity;
			endGame(finalScore);
		}
	});
}
// create function to run end of game functions
function endGame(finalScore) {
	// countdown interval function is escaped using clearInterval
	clearInterval(countDown);
    // change background image
    body.setAttribute("style", "background-image: url(https://images.unsplash.com/photo-1617888785557-f733a96e1ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80); background-size: contain; background-position: top;")
    // call function to show final score
	showScore(finalScore);
	showMissed();
	saveScorePrompt();
}
// create function to ask user if they want to save their score
function saveScorePrompt() {
	// create form element to allow score to be saved by user
	var saveScore = document.createElement('form');
	// append quiz section with the save score form
	quiz.appendChild(saveScore);
    saveScore.setAttribute("style", "width: 400px")
	// create element to show text to user
	var tellUser = document.createElement('p');
	// put the tee user p tag into the form
	saveScore.appendChild(tellUser);
	// change text content to asl user if they want to save their score
	tellUser.textContent = 'Would you like to save your score?';
	// add button for yes and a button for no
	var yesBtn = document.createElement('button');
	var noBtn = document.createElement('button');
    // augment styles of quiz and buttons
    quiz.setAttribute("style", "display: flex; justify-content: center; align-items: center; text-align: center; flex-wrap: wrap;")
    // add div
    var btnDiv = document.createElement('div');
    // add styles to div and add to form
    btnDiv.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; height: 100px; width: 500px; margin-bottom: 50px; background-color: rgba(36, 36, 36, 0.623);");
    // add div to quiz
    quiz.appendChild(btnDiv);
	// add yes and no button to the quiz section
	btnDiv.appendChild(yesBtn);
	btnDiv.appendChild(noBtn);
	// color code the buttons
	yesBtn.setAttribute('style', 'background-color: green; color: white; width: 100px; height: 60px; display: inline-block; margin-right: 10px; border: solid 2px rgba(36, 36, 36, 0.623);');
	noBtn.setAttribute('style', 'background-color: red; color: white; width: 100px; height: 60px; display: inline-block; margin-left: 10px');
	// add text to buttons
	yesBtn.textContent = 'YES';
	noBtn.textContent = 'NO';
	// add event listeners for the buttons
	yesBtn.addEventListener('click', saveUserScore);
	noBtn.addEventListener('click', replay);
}
// this a function that will prompt the user with the option to play again
function replay() {
	// grab all of the elements inside of quiz if the quiz has children
	if (quiz.children) {
		// store quiz children in variable
		var quizElements = quiz.children;
		// loop through the quiz elements and remove them one by one except for the first two elements
		for (var i = 2; i < quizElements.length; i++) {
			quizElements[i].setAttribute('style', 'display: none');
		}
	}
	// create button to allow user to play again if they want to
	var playAgain = document.createElement('button');
	// add play again button to the quiz element
	quiz.appendChild(playAgain);
	// add text and styles to button
	playAgain.textContent = 'Play Again';
    // add style to play again button
    playAgain.setAttribute("style","background-color: rgba(62, 200, 255, 0.712); color: white; display: block; width: 80px; height: 40px; border-radius: 20px;");
	// add event listener for play again button
	playAgain.addEventListener('click', function() {
		// remove the score and grade p elements
		var quizContent = quiz.children;
		// for each of the quiz's child element
		for (var el of quizContent) {
			el.setAttribute('style', 'display: none;');
		}
		// reset the timer
		timeRemaining = 120;
		// reset question index
		questionIndex = 0;
		// reset the final score
		finalScore = 0;
        // fetch the data
        fetchData();
		// start the quiz over
		startQuiz();
	});
}
// create function to allow user to save their score
function saveUserScore() {
	// grab all of the elements inside of quiz;
	var quizElements = quiz.children;
	// loop through the quiz elements and remove them one by one except for the first two elements
	for (var i = 2; i < quizElements.length; i++) {
		quizElements[i].setAttribute('style', 'display: none');
	}
	// create a form for user to enter initials
	var saveScoreForm = document.createElement('form');
    // add style to form
    saveScoreForm.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;")
	// append the form to the quiz element
	quiz.appendChild(saveScoreForm);
    // create div for label and input
    var initialsDiv = document.createElement('div');
    // give div style
    initialsDiv.setAttribute("style", "width: 100%;")
    // add initials div to form
    saveScoreForm.appendChild(initialsDiv);
	// create an input for the form
	var initialsInput = document.createElement('input');
	// apply attributes to the input
	initialsInput.setAttribute('type', 'text');
	initialsInput.setAttribute('id', 'initials');
	initialsInput.setAttribute('name', 'initials');
    initialsInput.setAttribute("style", "border-radius: 15px;");
	// create a label element for the input
	var initialsLabel = document.createElement('label');
	// apply attribute to the label
	initialsLabel.setAttribute('for', 'initials');
    // give style to label
    initialsLabel.setAttribute("style", "color: white; margin-right: 20px; font-size: 1.4rem;");
	// set text of the label
	initialsLabel.textContent = 'Your Initials:';
	// append the label to the form
	initialsDiv.appendChild(initialsLabel);
	// append the input to the form element
	initialsDiv.appendChild(initialsInput);
	// add button to save score when initials have been entered
	var saveScoreBtn = document.createElement('button');
	// add button to the save score form
	saveScoreForm.appendChild(saveScoreBtn);
	// add text and style to button
	saveScoreBtn.textContent = 'SAVE';
	saveScoreBtn.setAttribute('style', 'background-color: rgba(62, 200, 255, 0.712); color: white; display: block; width: 80px; height: 40px; border-radius: 20px;');
	// add event listener to the button
	saveScoreBtn.addEventListener('click', function() {
		// store score in local storage
		localStorage.setItem('savedScores', JSON.stringify([ initialsInput.value, finalScore ]));
		// remove elements in the quiz section;
		saveScoreForm.remove();
		saveScoreBtn.remove();
		// call the function to prompt user with
		replay();
	});
}
// create function to show the user the correct answer to the questions they answered wrong
function showMissed() {
	var showUserAnswer, showCorrectAnswer;
	for (var i = 0; i < numQuestions; i++) {
		// fetch and parse the users submission results from local storage
		var userDataArray = JSON.parse(localStorage.getItem(i));
		// if response was correct
		if (userDataArray[1] === 'correct') {
			// create p element for each response that was correct
			showUserAnswer = document.createElement('p');
			// append showUserAnswer to the quiz element
			quiz.appendChild(showUserAnswer);
			// display correct message
			showUserAnswer.textContent = `Question ${i + 1}: Your answer of ${userDataArray[0]} was correct!`;
			// change color of correct responses to green
			showUserAnswer.setAttribute('style', 'color: green');
		} else {
			// create p element for each response that was not correct
			showUserAnswer = document.createElement('p');
			// append showUserAnswer to the quiz element
			quiz.appendChild(showUserAnswer);
			// create p element for each the correct responses for the ones the user got wrong
			showCorrectAnswer = document.createElement('p');
			// append showCorrectAnswer to the quiz element
			quiz.appendChild(showCorrectAnswer);
			// get the correct answer identifier and text from trivia object
			var correctAnswerId = triviaFacts[i].answer;
			var correctAnswerText = triviaFacts[i].options[correctAnswerId];
			// display incorrect message
			showUserAnswer.textContent = `Question ${i + 1}: Your answer of ${userDataArray[0]} was incorrect`;
			// make text red
			showUserAnswer.setAttribute('style', 'color: red');
			// set inner text of show correct answer p tag to be the correct answer's text
			showCorrectAnswer.textContent = `The correct Answer was ${correctAnswerId} : ${correctAnswerText}`;
			// make text red
			showCorrectAnswer.setAttribute('style', 'color: red');
		}
	}
}
// create function to show the user their final score and final grade
function showScore(finalScore) {
	// create element to display the user's score
	var displayScore = document.createElement('p');
	// append quiz section with the display score p element
	quiz.appendChild(displayScore);
	// determine grade for user
	if (finalScore === 8) finalGrade = 'A+';
	else if (finalScore === 7) finalGrade = 'B';
	else if (finalScore === 6) finalGrade = 'C';
	else if (finalScore === 5) finalGrade = 'D';
	else if (finalScore <= 4 && finalScore > 0) finalGrade = 'F';
	else finalGrade = 'I have no words...';
	// create element to display user's grade
	var displayGrade = document.createElement('p');
	// append quiz section with the display grade p element
	quiz.appendChild(displayGrade);
	// set inner text of user grade to reflect on their performance
	displayGrade.textContent = 'Grade: ' + finalGrade;
	// set inner text of user score p tag to show their fraction representation of their correct answers divided by the number of questions in the quiz
	displayScore.textContent = `Final Score: ${finalScore}/${numQuestions}`;
	// give display grade and display score an id for easier css styling
	displayGrade.setAttribute('id', 'displayGrade');
	displayScore.setAttribute('id', 'displayScore');
}
// This is a function to initiate the beginning of the quiz
function startQuiz() {
	// hide the start quiz button
	start.setAttribute('style', 'display: none');
	// call the startTimer function to start the countdown for the user
	startTimer();
	// call the promptQuestions function to start displaying questions
	promptQuestions();
}
// Event listeners for the start quiz button, which when clicked will call the startQuiz function to kick off the sequence of functions that run the application
start.addEventListener('click', startQuiz);