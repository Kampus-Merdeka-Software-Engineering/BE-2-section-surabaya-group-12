const express = require('express');

const customerController = require('');

const router = express.Router();

// Create - Post
router.post('/', customerController.createNewCustomer);

// Read - Get
router.get('/', customerController.getAllCustomer);

// Update - Patch
router.patch('/:idCustomer', customerController.updateCustomer);

// Delete - Delete
router.delete('/:idCustomer', customerController.deleteCustomer);

exports.module = router;
