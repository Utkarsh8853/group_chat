"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMessageRouter = void 0;
const express_1 = __importDefault(require("express"));
const group_message_controller_1 = require("../controllers/group_message.controller");
exports.groupMessageRouter = express_1.default.Router();
exports.groupMessageRouter.post('/group_member', group_message_controller_1.groupMessageController.group_message);
