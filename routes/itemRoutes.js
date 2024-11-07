// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


// Middleware function to get item by ID
async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Cannot find item' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.item = item;
  next();
}

// Create Item
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Item
router.get('/:id', getItem, (req, res) => {
  res.json(res.item);
});

// Update Item
router.put('/:id', getItem, async (req, res) => {
  const updates = Object.keys(req.body);
  updates.forEach((update) => {
    res.item[update] = req.body[update];
  });
  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Item
router.delete('/:id', getItem, async (req, res) => {
  try {
    await res.item.remove();
    res.json({ message: 'Item Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
