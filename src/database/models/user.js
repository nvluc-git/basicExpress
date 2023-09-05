"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: "RoleId",
        as: "roleId",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email:  DataTypes.STRING,
      password: DataTypes.STRING,
      age:  DataTypes.INTEGER,      
      phonenumber:  DataTypes.INTEGER,    
      bio:  DataTypes.TEXT,      
      avatar:  DataTypes.STRING,
      RoleId:  DataTypes.INTEGER,
      status:  DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};


