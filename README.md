# Sandeepa Rathnayaka
# Setup Instructions
1. Clone the Repository - [click this link](https://github.com/IT21191442/weather-app.git)
2. Open terminal and redirect to the server.
3. Install Dependencies using npm install or npm i
4. Configure Environment Variables.
   
   - Include in .env
       - MONGODB_URI = mongo URL
       - port = 3000
       - EMAIL_USER=
       - EMAIL_PASS=
       - OPENWEATHERMAP_API_KEY=
       - OPENAI_API_KEY=s
       - GOOGLE_MAPS_API_KEY=
5. Start the weatherReport backend - npm start
6. Start the weatherReport backend in development mode - npm run dev

# API Documentaion
1. OpenWeatherMap API:
     - Purpose: Fetches real-time weather data for user locations.
     - Used for: Obtaining current temperature, weather description, humidity, and wind speed.
2. Google Maps Geocoding API:
     - Purpose: Converts geographic coordinates (latitude and longitude) into human-readable addresses.
     - Used for: Getting city names from user location coordinates.


