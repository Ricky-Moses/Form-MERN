const express = require('express')
const User = require('../models/user')

const router = express.Router()

// POST
router.post('/', async (req, res) => {
    const { id, date, name, dob, place, gender, martial, address, state, district, zip, email, phone } = req.body

    try{
        // Create a new user document
        const newUser = new User({
            id, date, name, dob, place, gender, martial, address, state, district, zip, email, phone
        })
        
        // Save newUser in Database
        await newUser.save()

        // Response to save
        res.status(200).json({message: 'User created successfully', user: newUser})
    }
    catch(err){
        console.log('Error creating user', err.message);
        res.status(500).json({message: 'Server Error'})
    }
})

// GET
router.get('/', async (req, res) =>{
    try{
        const user = await User.find();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({message: 'Error Fetching data'})
    }
})

module.exports = router