"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupChatMessagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const group_chat_messages_controller_1 = require("../controllers/group_chat_messages.controller");
exports.groupChatMessagesRouter = express_1.default.Router();
exports.groupChatMessagesRouter.post('/group_chat_messages', group_chat_messages_controller_1.groupChatMessagesController.group_chat_messages);
