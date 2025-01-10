import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },

    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    dob:{
        type: Date,
        required: [true, "Please provide a date of birth"],
    }
    }
    ,{
        timestamps: true,
    }

);

export default mongoose.model("User", userSchema);