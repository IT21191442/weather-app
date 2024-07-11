const axios = require('axios');
const User = require('../models/User');
const { sendEmail } = require('./emailService');
const { generateWeatherDescription } = require('./aiService');
const { getCityFromCoordinates } = require('./geocodingService');

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

async function getWeatherData(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return {
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed
  };
}

async function sendWeatherReports() {
  const users = await User.find();
  for (const user of users) {
    const [longitude, latitude] = user.location.coordinates;
    const weatherData = await getWeatherData(latitude, longitude);
    const city = await getCityFromCoordinates(latitude, longitude);
    const aiDescription = await generateWeatherDescription(weatherData, city);
    
    user.weatherData.push({
      date: new Date(),
      ...weatherData
    });
    await user.save();

    const emailContent = `
      Weather Report for ${city}:
      Temperature: ${weatherData.temperature}°C
      Description: ${weatherData.description}
      Humidity: ${weatherData.humidity}%
      Wind Speed: ${weatherData.windSpeed} m/s

      AI-generated description:
      ${aiDescription}
    `;

    await sendEmail(user.email, 'Weather Report', emailContent);
  }
}

module.exports = { getWeatherData, sendWeatherReports };