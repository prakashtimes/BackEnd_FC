const participationModel = require("./participation.model");
require("dotenv").config();
const participationService = {};

participationService.add = async(body) => {
    try{
        let { customerId,
            challengeId,
            challengeCompletionStatus,
            comments,
            requestPending } = body;
        let participation = new participationModel({
            customerId,
            challengeId,
            challengeCompletionStatus,
            comments : comments ? comments : null,
            requestPending : requestPending ? requestPending : false
        })
        let result = await participation.save();
        return result['id'];
    } catch(err){
        throw new Error(err);
    }
};

participationService.getByCustomerId = async (customerId) => {
    try{
        let result = await participationModel.find({customerId : customerId});
        return result;
    } catch(err){
        throw new Error(err);
    }
}

participationService.getByChallengeId = async (challengeId) => {
    try{
        let result = await participationModel.find({challengeId : challengeId});
        return result;
    } catch(err){
        throw new Error(err);
    }
}

participationService.getParticipation = async (challengeId, customerId) => {
    try{
        let result = await participationModel.find({challengeId : challengeId , customerId : customerId});
        return result;
    } catch(err){
        throw new Error(err);
    }
}

module.exports = participationService;