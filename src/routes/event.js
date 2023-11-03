const express = require('express');

const eventController = require('');

const router = express.Router();

// Create - Post
router.post('/', eventController.createNewEvent);

// Read - Get
router.get('/', eventController.getAllEvent);

// Update - Patch
router.patch('/idEvent', eventController.updateEvent);

// Delete - Delete
router.delete('/idEvent', eventController.deleteEvent);

exports.module = router;
