import User from "../models/User.js";

//Update user
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

// Delete Existing Hotel
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Has Been Deleted");
  } catch (err) {
    next(err);
  }
};

// Get any one User detail
export const getUser = async (req, res, next) => {
  try {
    constUser = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};

// Get all users details
export const getAllUsers = async (req, res, next) => {
  try {
    const User = await User.find();
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};
