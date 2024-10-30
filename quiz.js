const crosswordGrid = document.querySelector('.crossword-grid');
const gridSize = 20;
const start_button = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const StartDiv = document.getElementById('start');
const NextButton = document.getElementById('next-btn');
const questionElements = document.querySelectorAll('.question');
const CrosswordDiv = document.getElementById('crossword');
var username;
start_button.addEventListener('click', () => {
  username = prompt("Enter your name");
  if(username){
    console.log(username);
    quiz.classList.remove('isNotTurn');
    quiz.classList.add('isTurn');
    StartDiv.classList.remove('isTurn');
    StartDiv.classList.add('isNotTurn');
  };
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
    cell.id = `${i}${j}`;
    switch (cell.id) {
      case '02':
        cell.value = '1V';
        cell.readOnly = true;
        break;
      case '06':
        cell.value = '2V';
        cell.readOnly = true;
        break;
      case '35':
        cell.value = '2H';
        cell.readOnly = true;
        break;
      case '71':
        cell.value = '1H';
        cell.readOnly = true;
        break;
    }
    if (emptySquares.includes(cell.id)) {
      cell.setAttribute('maxlength', '1');
      cell.readOnly = false;
    }
    else {
      cell.readOnly = true;
      cell.style.backgroundColor = 'black';
      cell.style.color ="red";
    }
    
    cell.classList.add('cell');
    crosswordGrid.appendChild(cell);
  }
}


// Question logic

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

