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
exports.deleteController = void 0;
const group_chat_model_1 = require("../database/models/group_chat.model");
class DeleteController {
    delete_all_chats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { group_id } = req.body;
                const isGroup = yield group_chat_model_1.group_message.findOne({ where: { group_id: group_id } });
                if (!isGroup) {
                    return res.status(403).json({ message: 'There is no such group.' });
                }
                yield group_chat_model_1.group_message.destroy({
                    where: { group_id: group_id }
                });
                res.status(200).json({ message: `All messages deleted group_id ${group_id}` });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.deleteController = new DeleteController();
