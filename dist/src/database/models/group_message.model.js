"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.group_message = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const users_model_1 = require("./users.model");
const groups_model_1 = require("./groups.model");
console.log('Iniside Group message Model');
class group_message extends sequelize_1.Model {
}
exports.group_message = group_message;
group_message.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    group_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: groups_model_1.group,
            key: 'id'
        }
    },
    sender_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users_model_1.User,
            key: 'id'
        }
    },
    message_text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    message_time: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    sequelize: database_1.default,
    tableName: 'group_message',
});
users_model_1.User.hasMany(group_message);
group_message.belongsTo(users_model_1.User, { foreignKey: 'sender_id' });
groups_model_1.group.hasMany(group_message);
group_message.belongsTo(groups_model_1.group, { foreignKey: 'group_id' });
group_message.sync();
