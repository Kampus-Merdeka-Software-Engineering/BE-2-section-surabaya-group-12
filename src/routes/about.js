const express = require('express');

const aboutController = require('');

const router = express.Router();

// Create - Post
router.post('/', aboutController.createNewAbout);

// Read - Get
router.get('/', aboutController.getAllAbout);

// Update - Patch
router.patch('/:idAbout', aboutController.updateAbout);

// Delete - Delete
router.delete('/:idAbout', aboutController.deleteAbout);

exports.module = router;
