const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://kakadiyajanvi83:MPJ81gGp2tFnPHpJ@cluster0.gzpxv.mongodb.net/login-signUp').then(() => {
    
    console.log('Database Connected.');
}).catch((err) => {
    
    console.log('Database Not Connect', err);
});

module.exports = db;