const submitButton = document.getElementById("submit");
// const score = document.getElementById("score");
const score = 2;
// const nameText = document.getElementById("name");
var username = prompt("Enter your name");
while(!username){
  username = prompt("Enter your name");
};

// nameText.innerHTML = "Your name is: " + username;


console.log(username);
// console.log(score.value);
console.log(score);
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
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