import express from "express";
import { groupChatController } from "../controllers/group_chat.controller";

export const groupChatRouter = express.Router();

groupChatRouter.delete('/group_chat', groupChatController.group_chat);