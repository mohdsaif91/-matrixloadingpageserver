const authSchema = require("../Modal/Auth");

const login = async (req, res) => {
  try {
    if (!req.body.userName || !req.body.password) {
      throw "Username and password is not provided !";
    }
    const userName = req.body.userName;
    const user = await authSchema.findOne({ userName });
    if (!user) {
      throw "user not found !";
    }
    if (req.body.password !== user.password) {
      throw "user not found !";
    }
    res.status(200).send("user found");
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    await authSchema.insertMany(req.body, (err, data) => {
      if (err) {
        throw "insert operation failed";
      }
      if (data) {
        res.status(201).send(data);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  login,
  signUp,
};
