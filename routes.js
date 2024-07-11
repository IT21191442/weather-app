const express = require('express');
const User = require('./models/User');
const { getWeatherData } = require('./services/weatherService');
const { getCityFromCoordinates } = require('./services/geocodingService');

const router = express.Router();

// Store user details
router.post('/users', async (req, res) => {
  try {
    const { email, latitude, longitude } = req.body;
    const user = new User({
      email,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update user location
router.put('/users/:email/location', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { 
        location: {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user's weather data for a given day
router.get('/users/:email/weather', async (req, res) => {
  try {
    const { email } = req.params;
    const { date } = req.query;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const weatherData = user.weatherData.filter(data => 
      data.date.toISOString().split('T')[0] === date
    );
    res.json(weatherData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;