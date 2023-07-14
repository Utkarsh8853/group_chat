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
exports.groupMemberController = void 0;
const group_member_model_1 = require("../database/models/group_member.model");
class GroupMemberController {
    group_member(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user_id, group_id } = req.body;
                const result = yield group_member_model_1.group_member.create({ user_id, group_id });
                if (result) {
                    console.log('Member added', result);
                    return res.status(200).json({ message: "Member added" });
                }
                return res.status(400).json({ message: "incorrect id" });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.groupMemberController = new GroupMemberController();
