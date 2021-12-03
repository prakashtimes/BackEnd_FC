const customerModel = require("./customer.model");
const participationModel = require("./../participation/participation.model");
const challengeModel = require("./../challenge/challenge.model")
require("dotenv").config();
const customerService = {};

customerService.add = async(body) => {
    try{
        let { name,
            age,
            gender,
            mobile,
            email, 
            addr,
            addrCity} = body;
        let customer = new customerModel({
            name,
            age,
            gender,
            mobile,
            email : email ? email : null, 
            addr,
            addrCity
        })
        let result = await customer.save();
        return result['id'];
    } catch(err){
        throw new Error(err);
    }
};

customerService.getChallenges = async(customerId) => {
    try{
        let result = await participationModel.find({customerId : customerId});
        if(!result){
            return result;
        }
        let challengeArray = [];
        for(let i=0;i<result.length;i++){
            let challenge = await challengeModel.findOne({_id : result[i].challengeId});
            if(challenge)
                challengeArray.push(challenge);
        }
    } catch(err){
        throw new Error(err);
    }
}

customerService.addToFavorites = async(customerId, challengeId) => {
    try{
        //validate for duplicate inserts
        let result = await customerModel.findOneAndUpdate({customerId : customerId}, {$push: { favorites : challengeId }});
        return result;
        
    } catch(err){
        throw new Error(err);
    }
}

customerService.getById = async(customerId) => {
    try{
        let result = await customerModel.findOne({_id : customerId});
        return result;
        
    } catch(err){
        throw new Error(err);
    }
}

module.exports = customerService;