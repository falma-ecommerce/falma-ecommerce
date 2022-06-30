<<<<<<< HEAD
import User from './models/user.js';
=======
import User from './models/userModel.js';
>>>>>>> freemanchanges
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const configureJwtStrategy = (passport) => {
    passport.use("jwt", new JWTStrategy(
        {
            jwtFromRequest:(req) => {
                console.log("cookies are: ", req.cookies)
                return req.cookies["jwt"];
            },
            secretOrKey:process.env.JWT_SECRET
    },(jwtPayload, done) => {
        return( 
           User.findById(jwtPayload.sub)
<<<<<<< HEAD
               .select("_id firstname lastname username ip avatar message")
=======
               .select("_id firstname lastname username email roles")
>>>>>>> freemanchanges
               .then((user)=> {
                return done(null,user)
               })
               .catch((err) => {
                return done(err)
               })
        )
    }))
}

export default configureJwtStrategy;