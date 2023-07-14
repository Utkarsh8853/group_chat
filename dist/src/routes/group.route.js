"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
const express_1 = __importDefault(require("express"));
const group_controller_1 = require("../controllers/group.controller");
exports.groupRouter = express_1.default.Router();
exports.groupRouter.post('/group', group_controller_1.groupController.group);
