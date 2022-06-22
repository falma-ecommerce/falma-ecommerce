import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String },  
    hash: {type: String, required: true},   
    dates: {
      registered: {type: Date,
      default: Date.now(),
      last_active: { type: Date}
    }}
   
  });
  
  
  const User = mongoose.model("User", UserSchema);
  
  export default User;