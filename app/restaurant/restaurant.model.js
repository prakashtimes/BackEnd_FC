const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const restaurantSchema = new Schema(
    {
        createdDate: {
            type: Date,
            default : new Date(),
        },
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required : true
        },
        email: {
            type: String
        },
        addr: {
            type: String
        },
        addrCity : {
            type : String
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('restaurant', restaurantSchema);