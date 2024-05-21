const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');
// GET /tasks should return all the tasks:
router.get('/', (req, res) => {
  console.log('Get /tasks')
  const sqlText = `SELECT * FROM tasks ORDER BY id ASC;`

  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('GET /tasks query error:', error);
      res.sendStatus(500);
    })
})

// POST
router.post('/', (req, res) => {
  const sqlText = `
    INSERT INTO tasks
      (todo_text)
    VALUES
      ($1);
  `
  const sqlValues = [req.body.todo_text];
  
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('POST /tasks query error:', error);
      res.sendStatus(500);
    })
})

// PUT
router.put('/:id', (req, res) => {
  const sqlText = `
    UPDATE tasks
  	SET is_done=TRUE
  	  WHERE id=$1;
  `
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log('PUT /tasks query error:', error);
      res.sendStatus(500);
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  const sqlText = `
    DELETE FROM tasks
      WHERE id=$1;
  `
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('DELETE /tasks query error', error);
      res.sendStatus(500);
    })
})

// export
module.exports = router;
