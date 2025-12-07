import Router from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/user.js";

const USER_ROUTER = Router();

USER_ROUTER.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

USER_ROUTER.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});

USER_ROUTER.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  res.status(200).json(user);
});

USER_ROUTER.patch("/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.status(200).json(user);
});

USER_ROUTER.delete("/:id", async (req, res) => {
  const result = await deleteUser(req.params.id);
  res.status(200).json(result);
});

export default USER_ROUTER;
