const questions = [
	{
		number: 1,
		question: "What is the capital of France?",
		option1: "Paris",
		option2: "London",
		option3: "Berlin",
		option4: "Madrid",
		answer: "Paris"
	},
	{
		number: 2,
		question: "Which planet is known as the Red Planet?",
		option1: "Earth",
		option2: "Mars",
		option3: "Jupiter",
		option4: "Venus",
		answer: "Mars"
	},
	{
		number: 3,
		question: "What is the largest ocean on Earth?",
		option1: "Atlantic Ocean",
		option2: "Indian Ocean",
		option3: "Arctic Ocean",
		option4: "Pacific Ocean",
		answer: "Pacific Ocean"
	},
	{
		number: 4,
		question: "Who wrote 'Romeo and Juliet'?",
		option1: "William Shakespeare",
		option2: "Jane Austen",
		option3: "Charles Dickens",
		option4: "F. Scott Fitzgerald",
		answer: "William Shakespeare"
	},
	{
		number: 5,
		question: "Who is credited with discovering the theory of relativity?",
		option1: "Isaac Newton",
		option2: "Albert Einstein",
		option3: "Stephen Hawking",
		option4: "Galileo Galilei",
		answer: "Albert Einstein"
	},
	{
		number: 6,
		question: "Which country is known as the Land of the Rising Sun?",
		option1: "China",
		option2: "Japan",
		option3: "India",
		option4: "South Korea",
		answer: "Japan"
	},
	{
		number: 7,
		question: "Who painted the Mona Lisa?",
		option1: "Leonardo da Vinci",
		option2: "Vincent van Gogh",
		option3: "Pablo Picasso",
		option4: "Michelangelo",
		answer: "Leonardo da Vinci"
	},
	{
		number: 8,
		question: "Which of the following is a primary color?",
		option1: "Green",
		option2: "Orange",
		option3: "Purple",
		option4: "Blue",
		answer: "Blue"
	}
];

questions.forEach(question => {
	document.querySelector('.all-questions-container')
		.innerHTML += `
    <div class="question-container">
    	<div class="question-details">
    		<div class="question-number">${question.number}.&nbsp</div>
	      <div class="question">${question.question}</div>
			</div>
      <div class="all-options-container">
				<div class="option-container">
					<input type="radio" id="question-${question.number}-option1" name="question-${question.number}" value="${question.option1}">
					<label for="question-${question.number}-option1" class="option">${question.option1}</label>
				</div>
				<div class="option-container">
					<input type="radio" id="question-${question.number}-option2" name="question-${question.number}" value="${question.option2}">
					<label for="question-${question.number}-option2" class="option">${question.option2}</label>
				</div>
				<div class="option-container">
					<input type="radio" id="question-${question.number}-option3" name="question-${question.number}" value="${question.option3}">
					<label for="question-${question.number}-option3" class="option">${question.option3}</label>
				</div>
				<div class="option-container">
					<input type="radio" id="question-${question.number}-option4" name="question-${question.number}" value="${question.option4}">
					<label for="question-${question.number}-option4" class="option">${question.option4}</label>
				</div>
			</div>
    </div>
		`
});

let markedAnswers = {}, correctAnswers = 0;


document.querySelector('.submit').addEventListener('click', () => {
	document.querySelector('.result').classList.add('show-result')
	correctAnswers = 0;
	const result = document.querySelector('.main-result');
	result.innerHTML = '';
	
	questions.forEach(question => {
		const selectedOption = document.querySelector(`input[name="question-${question.number}"]:checked`);
		
		if (selectedOption) {
			markedAnswers[`${question.number}`] = selectedOption.value
			
			result.innerHTML += `<div class="result-entry">Question ${question.number}: ${selectedOption.value}</div>`;
			if (question.answer === selectedOption.value) {
				correctAnswers++
			}
		} else {
			markedAnswers[`${question.number}`] = 'None'
				result.innerHTML += `<div class="result-entry">Question ${question.number}: No option selected</div>`;
		}
	});
	result.innerHTML += `<div class="score">Total Score: ${correctAnswers} out of ${questions.length}</div>`
});

document.querySelector('.result')
	.addEventListener(('click'), () => {
		document.querySelector('.result').classList.remove('show-result')
	})
