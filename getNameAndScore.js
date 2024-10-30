const ScoreText = document.getElementById('score');

fetch('/user-score', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // console.log(data[0][0].name)
    console.log(data)
    //add tr elements to the table inside the div
    ScoreText.innerHTML = data.score
})