// Crossword grid generation
const crosswordGrid = document.querySelector('.crossword-grid');
const gridSize = 10;
const start_button = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const StartDiv = document.getElementById('start');
const NextButton = document.getElementById('next-btn');
const questionElements = document.querySelectorAll('.question');
const CrosswordDiv = document.getElementById('crossword');

start_button.addEventListener('click', () => {
    quiz.classList.remove('isNotTurn');
    quiz.classList.add('isTurn');
    StartDiv.classList.remove('isTurn');
    StartDiv.classList.add('isNotTurn');
});

const nextQuestion = (question_number) => {
    if (question_number === 0) {
        CrosswordDiv.classList.remove('isTurn');
        CrosswordDiv.classList.add('isNotTurn');
        questionElements[question_number].classList.remove('isNotTurn');
        questionElements[question_number].classList.add('isTurn');
    }
    else{
        questionElements[question_number-1].classList.remove('isTurn');
        questionElements[question_number-1].classList.add('isNotTurn');
        questionElements[question_number].classList.remove('isNotTurn');
        questionElements[question_number].classList.add('isTurn');
    }
};

const backQuestion = (question_number) => {
    if (question_number === 0) {
        questionElements[question_number].classList.remove('isTurn');
        questionElements[question_number].classList.add('isNotTurn');
        CrosswordDiv.classList.remove('isNotTurn');
        CrosswordDiv.classList.add('isTurn');
    }
    else{
        questionElements[question_number].classList.remove('isTurn');
        questionElements[question_number].classList.add('isNotTurn');
        questionElements[question_number-1].classList.remove('isNotTurn');
        questionElements[question_number-1].classList.add('isTurn');
    }
};

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const cell = document.createElement('input');
    cell.classList.add('cell');
    cell.id = `${i}${j}`;
    crosswordGrid.appendChild(cell);
  }
}

// Question logic
const questions = [
  {
    question: 'Kur u mbajt Kongresi i Manastirit?',
    alternatives: ['1555', '1908', '1972', '1909'],
    correctAnswer: 1
  },
  {
    question: 'Kush ishte kryetari i Kongresit te Manastirit?',
    alternatives: ['Naim Frashri', 'Sami Frashri', 'Gjergj Fishta', 'Luigj Gurakuqi'],
    correctAnswer: 2
  },
  {
    question: 'Cili ishte qëllimi i Kongrestit të Drejtshkrimit?',
    alternatives: [
        'Përcaktimi i një gjuhe standarde shqipe duke përdorur toskërishten letrare', 
        'Krijimi i një ure lidhese midis toskërishtes dhe gegërishtes', 
        'Krijimi i një alfabeti të ri mbi bazën e atij latin', 
        'Krijimi i nje fjalori standard shqip'
    ],
    correctAnswer: 0
  }
];

questions.forEach((question, index) => {
  const questionElement = questionElements[index];
  const questionText = questionElement.querySelector('h2');
  const alternativesList = questionElement.querySelector('ul');

  questionText.textContent = question.question;

  question.alternatives.forEach((alternative, alternativeIndex) => {
    const alternativeElement = alternativesList.children[alternativeIndex];
    const alternativeText = alternativeElement.querySelector('label');
    alternativeText.textContent = alternative;
  });
});

