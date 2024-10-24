async function handleSubmit(req, res, db) {
    const {username, score} = req.body;
  db.transaction(function (trx) {
    const newSubmission = {
      name: username,
      score: score,
      joined: new Date()
    };
    return trx('userleaderboard').insert(newSubmission).then(trx.commit).catch(trx.rollback);
    }).then(() => {
            res.json('Transaction complete. Your score has been added');
    }).catch(function (error) {
        console.error('Transaction failed:', error);
    });
}

module.exports = {handleSubmit};