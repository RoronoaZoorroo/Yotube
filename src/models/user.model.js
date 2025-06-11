import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        requied: true,
        trim: true,
        index: true
    },
    email: {
        tyep: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
    },
    avatar: { //cloudinary service
        type: String,
        requied: true,
    },
    coverimage: {
        type: String,
        requied: true,
    },
    password: {
        type: String,
        requied: [true,"password is requied"]
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    refreshToken: {
        type: String
    }
},{timestamps: true})

userSchema.pre("save", async function(next) {
    if(!this.ismodified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAcessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_EXPIRY,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)