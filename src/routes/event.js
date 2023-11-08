const express = require('express');

const EventController = require('../controller/event');

const router = express.Router();

// Create - Post
router.post('/', EventController.createNewEvent);

// Read - Get
router.get('/', EventController.getAllEvent);

// Update - Patch
router.patch('/idEvent', EventController.updateEvent);

// Delete - Delete
router.delete('/idEvent', EventController.deleteEvent);

module.exports = router;
