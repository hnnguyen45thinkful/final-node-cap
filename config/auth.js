// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    'facebookAuth' : {
        'clientID' : '321887081544096',
        'clientSecret' : '99ec08ec20a701bd70a471ecebf4edc8',
        'callbackURL': (process.env.NODE_ENV=='production') ? 'https://still-reaches-30553.herokuapp.com/auth/facebook/callback' : 'http://localhost:8080/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID' : '649501450931-4i1vfbia0ghfvmehrsoee1bgbh6qipnn.apps.googleusercontent.com',
        'clientSecret' : 'Cj3wbAsR_qknCsv9y3ASHSfB',
        'callbackURL': (process.env.NODE_ENV=='production') ? 'https://still-reaches-30553.herokuapp.com/auth/google/callback' : 'http://localhost:8080/auth/google/callback'
    },
        'twitterAuth' : {
        'consumerKey'        : '7nTwpShyRuzYJOdtZbOWOjCWx',
        'consumerSecret'     : 'c6u5jMZHdHEdtkOyhhbtmEtzGZUVS5vhTh3oBgqGclqPjZ3rUB',
        'callbackURL': (process.env.NODE_ENV=='production') ? 'https://still-reaches-30553.herokuapp.com/auth/twitter/callback' : 'http://localhost:8080/auth/twitter/callback'
    }
}
