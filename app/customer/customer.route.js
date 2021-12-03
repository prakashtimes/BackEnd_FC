const customerController = require("./customer.controller");
const router = require("express").Router();
const {
    customerAddValidationRules,
    customerValidationRules
} = require("./customer.validator");
const validate = require("../../util/validator");

router.post(
  "/",
  //customerAddValidationRules(),
  validate,
  customerController.add
);

router.get(
  "/:customerId",
  customerController.getById
);

router.put(
  "/addToFavorites",
  customerController.addToFavorites
);

router.get(
  "/getChallenges",
  customerController.getChallenges
)

module.exports = router;