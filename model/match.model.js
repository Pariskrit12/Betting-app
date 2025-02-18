import mongoose, { Schema } from "mongoose"

const matchSchema=new Schema({
    team1:{
        type:String,
        required:true,
        trim:true,
    },
    team:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:["Upcoming","Ongoing","Completed"],
        default:"Upcoming"
    },
    result:{
        type:String,
        enum:["team1","team2","draw",null],
        default:null
    },
    odd:{
        team1:{
            type:Number,
            required:true
        },
        team2:{
            type:Number,
            required:true,
        },
        draw:{
            type:Number,
            required:true,
        }
    },
    bet:{
        type:Schema.Types.ObjectId,
        ref:"Bet"
    }
},{timestamps:true});

export const Match=mongoose.model("Match",matchSchema)