const express = require('express');

const roomController = require('');

const router = express.Router();

// Create - Post
router.post('/', roomController.createNewRooms);

// Read - Get
router.get('/', roomController.getAllRoom);

// Update - Patch
router.get('/:idRoom', roomController.updateRoom);

// Delete - Delete
router.delete('/:idRoom', roomController.deleteRoom);

module.exports = router;
