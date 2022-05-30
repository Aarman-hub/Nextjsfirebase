const admin = require('../firebase')


const getCurrentUser = async (req, res) =>{
    try {
        
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)

        req.json(firebaseUser);
        
    } catch (error) {
        res.status(401).json({
            err:'Invalid or Expire token'
        })
    }
}

module.exports = {
    getCurrentUser
}