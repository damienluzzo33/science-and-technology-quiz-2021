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


// This is a function to initiate the beginning of the quiz
function startQuiz() {
    console.log("START");
}

// Event listeners for the start quiz button, which when clicked will call the startQuiz function to kick off the sequence of functions that run the application
start.addEventListener("click", startQuiz);


// PSEUDO CODE HERE : 

//