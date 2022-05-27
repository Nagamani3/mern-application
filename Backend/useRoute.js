const { Router } = require("express");
const route = Router();
const Schema = require("./useSchema");
const jwt = require("jsonwebtoken");

//signup
route.post("/register", async (req, res) => {
  try {
    const gmail = await Schema.findOne({ email: req.body.email });
    console.log(gmail);
    if (gmail) {
      return res.status(400).json("email exists");
    }
    let { name, email, password, confirmpassword } = req.body;
    let user = new Schema({
      name,
      email,
      password,
      confirmpassword,
    });
    console.log(user)
    await user.save();
  } catch (error) {
    console.log(error);
  }
  res.json(req.body);
});
//login

route.post("/login", async (req, res) => {
  try {
    const login = await Schema.findOne({ email: req.body.email });
    const password = await Schema.findOne({ password: req.body.password });
    console.log(login);
    if (!login) {
      return res.status(400).json("user not exist ...proceed to register");
    }
    if (!password) {
      return res.status(400).json("password not exists");
    }

    var token = await jwt.sign({ id: login.id }, "SECRET_KEY");
    res.header("auth", token).json(token);
  } catch (error) {
    console.log(error);
  }
});

//getting authenticated user
const validateUser = (req, res, next) => {
  let decode = jwt.verify(req.header("auth"), "SECRET_KEY");
  console.log(decode);
  req.id = decode.id;
  next();
};

route.get("/getdata", validateUser, async (req, res) => {
  let data = await Schema.findById(req.id);
  console.log(data);

  res.status(200).json(data);
});

module.exports = route;
