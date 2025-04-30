const express = require('express')
const User = require('../models/user')

const router = express.Router()

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

// POST
router.post('/add_task', async (req, res) => {
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


router.put('/update_task/:id', async (req, res) => {
    try{
        const updateData = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(200).json(updateData)
    }
    catch(err){
        console.log('Error Updating data', err);
        res.status(500).json({message: 'Server Error'})
    }
})

router.delete('/delete_task/:id', async (req, res)=>{
    try{
        const remainingData = await User.findByIdAndDelete(req.params.id)

        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch(err){
        console.log('Error Updating data', err);
        res.status(500).json({message: 'Server Error'})
    }
})

module.exports = router