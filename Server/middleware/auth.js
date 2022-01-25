const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (er, user) => {
            if(er) return res.status(403).send('Invalid Token!');       //There is a token, but this token is no longer valid, so you do not have access
    
            req.user = user;
            next();
        })
    }catch{
        return res.status(401).send('No token found!');
    }
    
}; 

// module.exports = authenticateToken;