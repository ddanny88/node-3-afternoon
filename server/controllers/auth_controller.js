const users = require('../models/users');
let id = 1;


const login = (req, res, next) => {

    let user = users.find(user => user.username === req.body.username && user.password === req.body.password);
    if (user) {
        req.session.user.username = user.username;
        res.status(200).json(req.session.user);
    } else {
        res.status(500).json("Unauthorized");
    }

}

const register = (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;

    user.push({
        id,
        username,
        password
    })
    id++;

    session.user.username = username;
    res.status(200).json(req.session);
}

const signout = (req, res, next) => {
    req.session.destroy();
    res.status(200).json(req.session);
}


const getUser = (req, res, next) => {
    res.status(200).json(req.session.user);
}



module.exports={
    login,
    register,
    signout,
    getUser
}