const express = require('express');
const router = express.Router();
const Pool = require('./../modules/pool.js');
const pool = Pool;


// POST Route
router.post('/', (req,res) => {
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "date")
                     VALUES ($1, $2, $3, $4, CURRENT_DATE);`;
    pool.query(queryText, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments]).then((result) => {
        // send a response of created back to the client
        res.sendStatus(201);
    }).catch((error) => {
        // console log and error message for POST
        console.log(`Error in POST route: ${error}`);
        res.sendStatus(500);
    });
}); // end POST route

// GET Route
router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "feedback" ORDER BY DATE DESC;`;
    pool.query(queryText).then((result) => {
        // send a response of created back to the client
        res.send(result.rows);
    }).catch((error) => {
        // console log and error message for POST
        console.log(`Error in POST route: ${error}`);
        res.sendStatus(500);
    });
}); // end GET route

module.exports = router;