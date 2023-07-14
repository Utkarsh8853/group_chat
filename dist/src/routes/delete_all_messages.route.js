"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllMessagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const delete_all_chats_controller_1 = require("../controllers/delete_all_chats.controller");
exports.deleteAllMessagesRouter = express_1.default.Router();
exports.deleteAllMessagesRouter.post('/delete_all_messages', delete_all_chats_controller_1.deleteController.delete_all_chats);
