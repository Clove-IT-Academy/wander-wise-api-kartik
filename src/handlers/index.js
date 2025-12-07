import Router from "express";
import USER_ROUTER from "./user.js";
import AUTH_ROUTER from "./auth.js";

const HANDLERS = Router();

HANDLERS.use("/users", USER_ROUTER);
HANDLERS.use("/auth", AUTH_ROUTER);

export default HANDLERS;
