const express = require("express");
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const app = express();
const keys = require("./config/keys")

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClienSecret,
    callbackURL: "/auth/google/callback"
}, (accesToken, refreshToken, profile, done)=>{
  console.log('access token', accesToken);
  console.log('refresh token', refreshToken);
  console.log('profile', profile);}))

app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("connected to the port 5000")
})