"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.group_member = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const users_model_1 = require("./users.model");
const groups_model_1 = require("./groups.model");
console.log('Iniside Group member Model');
class group_member extends sequelize_1.Model {
}
exports.group_member = group_member;
group_member.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users_model_1.User,
            key: 'id'
        }
    },
    group_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: groups_model_1.group,
            key: 'id'
        }
    },
}, {
    sequelize: database_1.default,
    tableName: 'group_member',
});
users_model_1.User.hasMany(group_member);
group_member.belongsTo(users_model_1.User, { foreignKey: 'user_id' });
groups_model_1.group.hasMany(group_member);
group_member.belongsTo(groups_model_1.group, { foreignKey: 'group_id' });
group_member.sync();
