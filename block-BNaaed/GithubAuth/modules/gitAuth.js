var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User')


passport.use(new GitHubStrategy({
    clientID: process.env.CLINT_ID,
    clientSecret: process.env.CLINT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);

    var profileData = {
      name:profile.displayName,
      username:profile.username,
      email:profile._json.email,
      photo:profile._json.avatar_url
    }
   User.findOne({email: profile._json.email},(err,user) => {
    if(err) return done(err);
    if(!user){
      User.create(profileData,(err,addedUser) => {
        if(err) return done(err);
        return done(null, addedUser);
      })
    }
    done(null,addedUser);
   })

   passport.serializeUser((user,done) => {
    done(null, user.id);
   })
  }
));


passport.deserializeUser((id,done) => {
  User.findById(id,function(err,user){
    done(err,user);
  })
})

// {
//   passport:{
//     user:{

//     }
//   }
// }

// {
//   userId: ksfabsdbfkja
// }