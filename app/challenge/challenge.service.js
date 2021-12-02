const challengeModel = require("./challenge.model");
require("dotenv").config();
const challengeService = {};

challengeService.add = async (body) => {
  let { restaurantId, name, description, startDate, endDate, foodItem, startTime, endTime,
    timeLimit, minParticipants, maxParticipants, vegetarian, rules, fileName, tags,
    reward, participationFee, autoBooking } = body;
  let challenge = new challengeModel({
    restaurantId,
    name,
    description: description ? description : null,
    startDate,
    endDate,
    foodItem,
    startTime,
    endTime,
    timeLimit,
    minParticipants,
    maxParticipants,
    vegetarian,
    rules,
    fileName: fileName ? fileName : null,
    tags: tags ? tags : null,
    reward,
    participationFee,
    autoBooking,
    isActive: true,
    createdDate: new Date(),
    modifiedDate: null
  });

  try {
    let result = await challenge.save();
    return result["_id"];
  } catch (err) {
    throw new Error(err);
  }
};

challengeService.getById = async (challengeId) => {
  let challenge = await challengeModel.findOne({ _id: challengeId, isActive: true });
  return challenge;
};

challengeService.get = async () => {
  let challenges = await challengeModel.find({ isActive: true });
  return challenges;
};

module.exports = challengeService;