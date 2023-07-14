"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupController = void 0;
const groups_model_1 = require("../database/models/groups.model");
class GroupController {
    group(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, photo, description, created_by } = req.body;
                const result = yield groups_model_1.group.create({ id, name, photo, description, created_by });
                if (result) {
                    console.log('Group created', result);
                    return res.status(200).json({ message: "Group created" });
                }
                return res.status(400).json({ message: "server problem" });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.groupController = new GroupController();
