const swag = require('../models/swag');


const add = (req, res, next) => {
    const index = req.sessions.cart.findIndex(item => item.id === req.query.id);
    if (index === -1) {
        let selectItem = swag.find(swag => swag.id === req.query.id);
        req.sessions.cart.push(selectItem)
        req.sessions.user.total += selectItem.price
    }
    res.status(200).json(req.session.user);
}


const remove = (req, res, next) => {
    let selectItem = swag.find(swag => swag.id === req.query.id)
    if (selectItem) {
        let i = req.sessions.user.cart.findIndex(swag => swag.id === req.query.id)
        req.sessions.user.cart.splice(i, 1);
        req.sessions.user.total -= selectItem.price;
    }
    res.status(200).json(req.sessions.user)
}


const checkout = (req, res, next) => {
    req.session.user.cart = [];
    req.session.user.total = 0

    res.status(200).json(req.sessions.user)
}





module.exports = {
    add,
    remove,
    checkout
}