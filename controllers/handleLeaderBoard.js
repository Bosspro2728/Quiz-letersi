async function handleLeaderBoard(req, res, db) {
    return db('userleaderboard').select('*').orderBy('score', 'desc').then(list => {
        res.json(list)
    })
}
async function getScore(req, res, db) {
    return db('userleaderboard').select('*').then(list => {
        res.json(list.at(-1))
    })
}
module.exports = {handleLeaderBoard, getScore};