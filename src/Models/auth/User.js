import { DataTypes } from "sequelize";
import sequelize from "../../infrastructure/persistence/database.js";

const User = sequelize.define(
    "User",
    {
        userId: {
            type: DataTypes.UUID,
            primaryKey: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        firstName: DataTypes.STRING,

        lastName: DataTypes.STRING,

        status: DataTypes.STRING
    },
    {
        schema: "auth",
        tableName: "users",
        timestamps: true
    }
);

export default User;