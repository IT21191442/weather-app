const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateWeatherDescription(weatherData, city) {
  const prompt = `Generate a brief, engaging description of the weather in ${city}. Current conditions: Temperature: ${weatherData.temperature}°C, ${weatherData.description}, Humidity: ${weatherData.humidity}%, Wind Speed: ${weatherData.windSpeed} m/s.`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 100
  });

  return response.choices[0].message.content.trim();
}

module.exports = { generateWeatherDescription };