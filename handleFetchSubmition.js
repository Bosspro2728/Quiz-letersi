const submitButton = document.getElementById("submit");
//we get score and username variables from the quiz.js file
console.log(username);
console.log(score);
submitButton.addEventListener("click", async (event) => {
  console.log(username);
  event.preventDefault();
  submitButton.disabled = true;
  const answer_q1 = Number(document.querySelector('input[name="q1"]:checked').value);
  const answer_q2 = Number(document.querySelector('input[name="q2"]:checked').value);
  const answer_q3 = Number(document.querySelector('input[name="q3"]:checked').value);
  console.log(answer_q1, answer_q2, answer_q3)
  console.log(questions[0].correctAnswer, questions[1].correctAnswer, questions[2].correctAnswer )
  if(answer_q1 === questions[0].correctAnswer){
    score += questions[0].points;
    console.log(score)
  }
    if(answer_q2 === questions[1].correctAnswer){
      score += questions[1].points;
      console.log(score)
    }
    if(answer_q3 === questions[2].correctAnswer){
      score += questions[2].points;
      console.log(score)
    }
    const crossword1 = window.crossword1;
    const answers = crossword1.map((item) => item.answer);
    const letters = crossword1.map((item) => item.letters);

    answers.forEach((answer, index) => {
      const letter = letters[index];
      for (let i = 0; i < answer.length; i++) {
        const cellId = letter[i];
        const cell = document.getElementById(cellId);
        if (cell) {
          console.log(cell);
          if (cell.value.toUpperCase() === answer[i]) {
            score += 1;
          }
        }
      }
    });
    // const firstV = crossword1[2];
    // const secondV = crossword1[1];
    // const firstH = crossword1[0];
    // const secondH = crossword1[3];

    // for (let index = 0; index < firstV.length; index++) {
    //   const cell = document.getElementById(firstV.letters[index])
    //   console.log(cell)
    //   if (cell.value.toUpperCase() === firstV.answer[index]) {
    //     score += 1
    //   }
    // }
    // for (let index = 0; index < firstH.length; index++) {
    //   const cell = document.getElementById(firstH.letters[index])
    //   console.log(cell)
    //   if (cell.value.toUpperCase() === firstH.answer[index]) {
    //     score += 1
    //   }
    // }
    // for (let index = 0; index < secondV.length; index++) {
    //   const cell = document.getElementById(secondV.letters[index])
    //   console.log(cell)
    //   if (cell.value.toUpperCase() === secondV.answer[index]) {
    //     score += 1
    //   }
    // }
    // for (let index = 0; index < secondH.length; index++) {
    //   const cell = document.getElementById(secondH.letters[index])
    //   console.log(cell)
    //   if (cell.value.toUpperCase() === secondH.answer[index]) {
    //     score += 1
    //   }
    // }
    console.log(score)
  await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      score: score,
    }),
  })
    .then(async (response) => await response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "AfterSubmit.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});