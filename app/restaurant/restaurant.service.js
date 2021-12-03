const restaurantModel = require("./restaurant.model");
const participationModel = require("./../participation/participation.model")
const challengeModel = require("./../challenge/challenge.model");
require("dotenv").config();
const restaurantService = {};

restaurantService.add = async (body) => {
    let {createdDate, name, mobile, email, addr, addrCity} = body;
    let restaurant = new restaurantModel({
      createdDate : createdDate ? createdDate : new Date(),
      name,
      mobile,
      email,
      addr,
      addrCity,
    });
  
    try {
      let result = await restaurant.save();
      return result["_id"];
    } catch (err) {
      throw new Error(err);
    }
};

restaurantService.getById = async (restaurantId) => {
    try{
        let restaurant = await restaurantModel.findById(restaurantId);
        return restaurant;
    } catch(err){
        throw new Error(err);
    }
};

restaurantService.updateById = async (restaurantId, update) => {
    try{
        let restaurant = await restaurantModel.findOneAndUpdate({_id : restaurantId}, update, {new: true});
        return restaurant;
    } catch(err){
        throw new Error(err);
    }
};

restaurantService.getBookings = async (restaurantId) => {
    try{
        let challenges = await challengeModel.find({restaurantId : restaurantId});
        let bookingsArray = [];
        for(let i=0; i<challenges.length; i++){
            let booking = await participationModel.findOne({challengeId : challenges[i]._id});
            console.log(`booking = ${booking}`);
            if(booking){
                bookingsArray.push(booking);
            }
        }
        return bookingsArray;
    } catch(err){
        console.log(err);
        throw new Error(err);
    }
};

module.exports = restaurantService;