const restaurantController = require("./restaurant.controller");
const router = require("express").Router();
const {
    restaurantAddValidationRules,
    restaurantGetValidationRules
} = require("./restaurant.validator");
const validate = require("../../util/validator");

router.post(
  "/",
  //restaurantAddValidationRules(),
  validate,
  restaurantController.add
);

router.get(
  "/getbookings",
  restaurantController.getBookings
)

router.get(
  "/:restaurantId",
  restaurantController.getById
);

router.put(
  "/:restaurantId",
  restaurantController.updateById
);


module.exports = router;