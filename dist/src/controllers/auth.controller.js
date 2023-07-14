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
exports.authController = void 0;
const users_model_1 = require("../database/models/users.model");
class AuthController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password } = req.body;
                const result = yield users_model_1.User.create({ username, email, password });
                if (result) {
                    console.log('Signup successfully', result);
                    return res.status(200).json({ message: "OK" });
                }
                return res.status(400).json({ message: "server problem" });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const result = yield users_model_1.User.findOne({ where: { username: username, password: password } });
                if (result) {
                    console.log('Login result', result);
                    return res.status(200).json({ message: "OK Login" });
                }
                return res.status(400).json({ message: "Incorrect Password" });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.authController = new AuthController();
