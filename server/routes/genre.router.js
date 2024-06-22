const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  let genreid = req.params.id;
  const queryText = `
  SELECT "name"
    FROM "genres"
    INNER JOIN "movies_genres" ON "movies_genres"."genre_id"="genres"."id" 
    WHERE "movies_genres"."movie_id"=$1
    `
    pool.query(queryText, [genreid])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get with single movie get route', err);
      res.sendStatus(500)
    })

  
});

module.exports = router;