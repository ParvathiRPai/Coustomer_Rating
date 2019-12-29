const passport=require('passport');

//Rout handler
module.exports=app=>{
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

//Rout handler to get users profile information

app.get('/auth/google/callback',passport.authenticate('google') )};
