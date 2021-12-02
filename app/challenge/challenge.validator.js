const { body, header } = require("express-validator");

const challengeAddValidationRules = () => {
  return [
    body("restaurantId").isMongoId().withMessage("Invalid Restaurant Id"),
    body("name").isString().notEmpty().withMessage("Invalid Challenge Name"),
    body("startDate").isDate().withMessage("Invalid Challenge Start Date"),
    body("endDate").isDate().withMessage("Invalid Challenge End Date"),
    body("foodItem").isObject().withMessage("Invalid Challenge Food Item"),
    body("startTime").isString().withMessage("Invalid Challenge Start Time"),
    body("endTime").isString().withMessage("Invalid Challenge End Time"),
    body("timeLimit")
      .isInt()
      .withMessage("Time Limit must be an Integer")
      .isInt({ min: 1 })
      .withMessage("Time Limit must be greater than 0"),
    body("maxParticipants")
      .isInt()
      .withMessage("Max Participants must be an Integer")
      .isInt({ min: 1 })
      .withMessage("Max Participants must be greater than 0"),
    body("minParticipants")
      .isInt()
      .withMessage("Min Participants must be an Integer")
      .isInt({ min: 1 })
      .withMessage("Min Participants must be greater than 0"),
    body("vegetarian")
      .isInt()
      .withMessage("Vegetarian must be an Integer")
      .isInt({ min: 0, max: 2 })
      .withMessage("Vegetarian must be from 0 to 2"),
    body("rules").isString().notEmpty().withMessage("Invalid Challenge Rules"),
    body("reward").isString().withMessage("Invalid Challenge Reward"),
    body("participationFee").isObject().withMessage("Invalid Challenge Participation Fees"),
    body("autoBooking").isBoolean().withMessage("Invalid Challenge Auto Booking"),
  ];
};

module.exports = {
  challengeAddValidationRules
};