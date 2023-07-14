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
exports.groupChatController = void 0;
const group_chat_model_1 = require("../database/models/group_chat.model");
const group_member_model_1 = require("../database/models/group_member.model");
class GroupChatController {
    group_chat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { group_id, sender_id, message_text } = req.body;
                const isMember = yield group_member_model_1.group_member.findOne({ where: { user_id: sender_id } });
                if (!isMember) {
                    return res.status(403).json({ message: 'You are not a member of this group chat.' });
                }
                const result = yield group_chat_model_1.group_message.create({ group_id, sender_id, message_text });
                if (result) {
                    console.log('Message sent', result);
                    return res.status(200).json({ message: "Message sent" });
                }
                return res.status(400).json({ message: "input valid detail" });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.groupChatController = new GroupChatController();
