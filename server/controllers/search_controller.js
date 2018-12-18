const swag = require('../models/swag');

const checkCat = (req, res, next) => {
    if(!req.query.category){
        res.status(200).json(swag);
    } else {
        let filterd = swag.filter(swag => swag.category === req.query.category);
        res.status(200).json(filterd)
    }
}


module.exports = {
    checkCat
}