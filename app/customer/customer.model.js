const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const customerSchema = new Schema(
    {
        name : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true
        },
        gender : {
            type : String,
            required : false
        },
        mobile : {
            type : String,
            required : true
        },  
        email : {
            type : String,
            default : null
        },
        addr : {
            type : String,
            default : null
        },
        addrCity : {
            type : String,
            default : null
        },
        favorites : {
            type : [ObjectId],
            default : []
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('customer', customerSchema);