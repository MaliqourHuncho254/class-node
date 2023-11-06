const express = require('express');
const routes = express.Router();
const UserController = require('../controller/UserController');


// Get a list of students from the database
routes.get('/register', UserController.RegisterUser);

// Add a student to the database
routes.post('register', UserController.RegisterUser);

// Update a student in the database
routes.patch('register', UserController.RegisterUser);

// Delete a student from the database
routes.delete('/register', UserController.RegisterUser);

module.exports = routes;