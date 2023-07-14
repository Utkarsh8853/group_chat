"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupChatRouter = void 0;
const express_1 = __importDefault(require("express"));
const group_chat_controller_1 = require("../controllers/group_chat.controller");
exports.groupChatRouter = express_1.default.Router();
exports.groupChatRouter.delete('/group_chat', group_chat_controller_1.groupChatController.group_chat);
