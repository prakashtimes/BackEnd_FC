const challengeController = require("./challenge.controller");
const router = require("express").Router();
const {
  challengeAddValidationRules,
  challengeGetValidationRules
} = require("./challenge.validator");
const validate = require("../../util/validator");

router.post(
  "/",
  challengeAddValidationRules(),
  validate,
  challengeController.add
);

router.get(
  "/:id",
  challengeController.getById
);

router.get(
  "/",
  challengeController.get
);

module.exports = router;