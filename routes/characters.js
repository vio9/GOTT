const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  const { max_age } = req.query;

  let sql = "SELECT * FROM characters WHERE age <= ?";
  connection
    .promise()
    .query(sql, [max_age])
    .then(([results]) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving characters from db.");
    });
});

router.post("/", (req, res) => {
  const { name, birthplace, age } = req.body;
  const sql = `INSERT INTO characters(name, birthplace, age) VALUES(?, ?, ?)`;

  connection.query(sql, [name, birthplace, age], (err, results) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

/*router.patch("/characters/:id", (req, res) => {
  connection
    .promise()
    .query("UPDATE characters SET ? WHERE id = ?", [req.body, req.params.id])
    .then(([result]) => {
      res.sendStatus(200);
    });
});*/

module.exports = router;
