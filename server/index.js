require('dotenv').config();
const express = require('express');
const { json } = require("body-parser");
const session = require("express-session");
const app = express();

//middleware: 
const checkForSession = require("./middlewares/checkForSession");

//controllers: 
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');
const cart_controller = require("./controllers/cart_controller");
const swag_controller = require('./controllers/search_controller');







app.use(json());
app.use(express.static(`${__dirname}/../build` ));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);
app.use(checkForSession);



//endpoints: swag: 
app.get("/api/swag", swag_controller.read);


//endpoints: auth: 
app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.get('/api/user', auth_controller.getUser);


//endpoints: cart: 
app.post("/api/cart", cart_controller.add);
app.post('/api/cart/checkout', cart_controller.checkout);
app.delete('/api/cart', cart_controller.remove);

//endpoint: search: 
app.get("/api/search", search_controller.checkCat)








const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => console.log(`Listening on port `));