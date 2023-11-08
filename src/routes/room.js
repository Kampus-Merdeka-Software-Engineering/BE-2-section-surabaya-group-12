const express = require('express');

const RoomController = require('../controller/room');

const router = express.Router();

// Create - Post
router.post('/', RoomController.createNewRoom);

// Read - Get
router.get('/', RoomController.getAllRoom);

// Update - Patch
router.get('/:idRoom', RoomController.updateRoom);

// Delete - Delete
router.delete('/:idRoom', RoomController.deleteRoom);

module.exports = router;
