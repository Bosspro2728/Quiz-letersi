async function handleLeaderBoard(req, res, db) {
    return db('userleaderboard').select('*').then(list => {
        res.json(list)
    })
}

module.exports = {handleLeaderBoard};