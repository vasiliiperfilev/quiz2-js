const router = require("express").Router();
let Quiz = require("../models/quiz.model");

router.route("/").get((req, res) => {
  const quiz = new Quiz({
    name: 'Vasilii Perfilev',
    sid: 300341928
  });

  quiz
    .save()
    .then(() => res.json("Quiz entry added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
