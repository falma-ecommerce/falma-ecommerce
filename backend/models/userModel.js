import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({

    username: { type: String, trim: true, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String }, 
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    confirmPassword: { type: String, required: true, unique: true},
    isAdmin: { type: Boolean, default: false, required: false},
    
    dates: {
      registered: {type: Date,
      default: Date.now(),
      last_active: { type: Date}
    }}
   
  });
  
  
  const User = mongoose.model("User", UserSchema);
  
  export default User;