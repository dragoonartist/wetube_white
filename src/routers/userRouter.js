import express from "express";
import { see, edit, deleteUser, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter.get("/:id(\\d+)/edit", edit);
userRouter.get("/:id(\\d+)/delete", deleteUser);
userRouter.get("/logout", logout);

export default userRouter;
