"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_route_1 = require("./src/routes/auth.route");
const group_route_1 = require("./src/routes/group.route");
const group_member_route_1 = require("./src/routes/group_member.route");
const group_chat_route_1 = require("./src/routes/group_chat.route");
const group_chat_messages_route_1 = require("./src/routes/group_chat_messages.route");
const delete_all_messages_route_1 = require("./src/routes/delete_all_messages.route");
//import User from './src/database/models/users.model';
// import group from './src/database/models/groups.model';
// import group_message from './src/database/models/group_message.model';
// (async ()  => {
//   await User.sync();
//   await group.sync();
//   await group_message.sync();
// })();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const port = 6000;
const hostname = "127.0.0.1";
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("/auth", auth_route_1.authRouter);
app.use("/data", group_route_1.groupRouter);
app.use("/add", group_member_route_1.groupMemberRouter);
app.use("/write", group_chat_route_1.groupChatRouter);
app.use("/read", group_chat_messages_route_1.groupChatMessagesRouter);
app.use("/remove", delete_all_messages_route_1.deleteAllMessagesRouter);
app.listen(port, hostname, () => {
    console.log(`Server started on port ${port}`);
});
