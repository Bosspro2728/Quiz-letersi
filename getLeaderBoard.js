const table = document.getElementById('leaderBoard');

fetch('/leaderboard-data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // console.log(data[0][0].name)
    console.log(data)
    for(var i=0; i<data.length; i++){
            //add tr elements to the table inside the div
            table.innerHTML += `<tr><td>${data[i].name}</td><td>${data[i].score}</td><td>${data[i].joined}</td></tr>`
    }
})