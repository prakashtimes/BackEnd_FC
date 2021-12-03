const participationController = require("./participation.controller");
const router = require("express").Router();
const {
    participationAddValidationRules,
    participationValidationRules
} = require("./participation.validator");
const validate = require("../../util/validator");

router.post(
  "/",
  //participationAddValidationRules(),
  validate,
  participationController.add
);

router.get(
  "/customerId",
  participationController.getByCustomerId
);

router.get(
  "/challengeId",
  participationController.getByChallengeId
);

router.get(
  "/getParticipation",
  participationController.getParticipation
)

module.exports = router;