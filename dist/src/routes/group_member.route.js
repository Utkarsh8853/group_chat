"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMemberRouter = void 0;
const express_1 = __importDefault(require("express"));
const group_member_controller_1 = require("../controllers/group_member.controller");
exports.groupMemberRouter = express_1.default.Router();
exports.groupMemberRouter.post('/group_member', group_member_controller_1.groupMemberController.group_member);
