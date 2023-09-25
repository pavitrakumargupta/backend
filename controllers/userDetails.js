const User = require("../model/userModel");
const Restuarant=require("../model/resturantContent")


module.exports.authUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Please provide both username and password",
    });
  }

  try {
    const user = await User.findOne({ username });
    const resturant=await Restuarant.find()
    if (user && (await user.password===password)) {
      return res.status(200).json({user,resturant:resturant[0]});
    }

    return res.status(401).json({
      message: "Please enter the correct username or password",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "An error occurred. Please try again later.",
    });
  }
};

module.exports.getResturantDetails = async (req, res, next) => {
  try {
    const resturant=await Restuarant.find()
    return res.json(resturant[0]);
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Internal server Error", status: false });
  }
};

module.exports.editPost = async (req, res, next) => {
  try {
    const updatedDetail=req.body
    const updateDetail=await Restuarant.findByIdAndUpdate(req.body._id,updatedDetail)
    return res.json("Edited Successfully")
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "An Error occured in Loading data", status: false });
  }
};
module.exports.insertNew = async (req, res, next) => {
  try {
    const deatills=req.body
    const createdRestuarant=await Restuarant.create(deatills)
    return res.json({message:"created new restuarant",createdRestuarant})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "An Error occured in Loading data", status: false });
  }
};

module.exports.cronJob = async (req, res, next) => {
  try {
    console.log("running cron job");
    return res.json({ msg: "everything working fine ", status: true });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Internal server Error", status: false });
  }
};
