import mongoose, { Schema } from "mongoose"

const transactionSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },

    type:{
        type:String,
        enum:["Withdrawl","Deposit"],
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    description:{
        type:String,
    }
},{timestamps:true});

export const Transaction=mongoose.model("Transaction",transactionSchema);