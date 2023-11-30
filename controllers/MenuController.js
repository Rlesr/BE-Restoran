// controllers/MenuControllers.js

const { Menu } = require("../models");

const findAllMenu = async (req, res) => {
  try {
    const data = await Menu.findAll();
    res.status(200).json({ message: "Data successfully retrieved", data });
  } catch (error) {
    console.error('Error fetching menu list:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const detailMenu = async (req, res) => {
  try {
    const response = await Menu.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching menu details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const tambahMenu = async (req, res) => {
  try {
    const data = req.body;
    const result = await Menu.create(data);
    res.status(201).json({ message: "Menu added successfully", result });
  } catch (error) {
    console.error('Error adding menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const hapusMenu = async (req, res) => {
  try {
    const id = req.params.id;
    await Menu.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      message: "Menu deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting menu",
    });
  }
};

const ubahMenu = async (req, res) => {
  try {
    const id = req.body.id;
    const newData = req.body;
    const result = await Menu.update(newData, {
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Menu updated successfully", data: newData });
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { findAllMenu, detailMenu, tambahMenu, hapusMenu, ubahMenu };
