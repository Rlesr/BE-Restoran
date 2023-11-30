// routes/index.js

const router = require("express").Router();
const {
  findAllMenu,
  detailMenu,
  tambahMenu,
  hapusMenu,
  ubahMenu,
} = require("../controllers/MenuController");

// Endpoint Menu
router.get("/menus", findAllMenu);
router.get("/menu/:id", detailMenu);
router.post("/menu", tambahMenu);
router.delete("/menu/:id", hapusMenu);
router.put("/menu", ubahMenu);

module.exports = router;
