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
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.redirect('/api/user', formRouter)
})

// Server listen
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})