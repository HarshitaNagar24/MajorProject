import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/userContoller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello User, you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello User, you are logged in, Now you can delete your account");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, you are logged in, Now you can delete all accounts");
// });

// update
router.put("/:id",verifyUser, updateUser);

// delete
router.delete("/:id",verifyUser, deleteUser);
// Get
router.get("/:id", verifyUser, getUser);

// get all user
router.get("/",verifyAdmin, getAllUsers);

export default router;
