const express = require("express");
const connection = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM characters";

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection
    .promise()
    .query("SELECT * FROM characters WHERE id = ?", [id])
    .then(([results]) => {
      if (results.length) {
        res.json(results[0]);
      } else {
        res.sendStatus(404);
      }
    });
});

router.delete("/:id", (req, res) => {
  connection
    .promise()
    .query("DELETE FROM characters WHERE id = ?", [req.params.id])
    .then(([result]) => {
      if (result.affectedRows) res.sendStatus(204);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
