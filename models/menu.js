// models/menu.js

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // define association here
    }
  }

  Menu.init({
    namaMakanan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    gambar: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Menu',
  });

  return Menu;
};
