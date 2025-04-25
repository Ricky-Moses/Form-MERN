// Entry Point
const express = require("express");
const connectDB = require('./config/db')
const cors = require('cors')
const formRouter = require('./routes/formRoutes')

// Instance Express
const app = express();

// Connect MongoDB
connectDB()

// Middleware
app.use(cors()) // Enable the cross-origin platform
app.use(express.json()) // Enable JSON Parse bodies

// Routes
app.use('/api/user', formRouter)

// Server listen
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})