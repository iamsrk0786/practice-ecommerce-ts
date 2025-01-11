import mongoose from "mongoose";
interface User extends Document{
name: string;
email: string;
role: "user" | "admin";
dob: Date;
createdAt: Date;
updatedAt: Date;

}
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

export default mongoose.model<User>("User", userSchema);