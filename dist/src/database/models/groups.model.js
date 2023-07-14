"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const users_model_1 = require("./users.model");
console.log('Iniside Group Model');
class group extends sequelize_1.Model {
}
exports.group = group;
group.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    created_by: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: users_model_1.User,
            key: 'id'
        }
    },
}, {
    sequelize: database_1.default,
    tableName: 'groups',
});
users_model_1.User.hasMany(group);
group.belongsTo(users_model_1.User, { foreignKey: 'created_by' });
group.sync();
exports.default = group;
