import mongoose  from "mongoose";
import crypto from "crypto"; // used to hash passwords
import { v4 as uuidv4 } from 'uuid'; // used to generate unique strings


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, //spaces will be trimed out
        required: true,
        maxLength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true,
      
    },
    about: {
        type: String,
        trim: true,
      
    },
    salt: String,
    role: { //admin and users
        type: Number,
        default:0
    },
    history: {
        type: Array,
        default:[] // when user purchase something it will be storeed in histort
    }
}, {timestamps:true}) // created and updated fields

//virtual fields

userSchema.virtual("password") // sending from the client side
.set(function(password){
    this._password = password
    this.salt = uuidv4() // gives a random string and is used to hash password
    this.hashed_password = this.encryptPassword(password) // password will be encrypted
})
.get(function(){
    return this._password
})

userSchema.methods = {
    authenticate: function(plaintext){
        return this.encryptPassword(plaintext) === this.hashed_password;
    },

    encryptPassword: function(password){
        if (!password) return "";
        try{
            return crypto
            .createHmac("sha1", this.salt)
            .update(password)
            .digest("hex")

        }catch(err){
            return ""
        }
    }
}

const User = mongoose.model("User", userSchema);

export default User;