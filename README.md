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

# API Documentaion & services
1. OpenWeatherMap API:
     - Purpose: Fetches real-time weather data for user locations.
     - Used for: Obtaining current temperature, weather description, humidity, and wind speed.
2. Google Maps Geocoding API:
     - Purpose: Converts geographic coordinates (latitude and longitude) into human-readable addresses.
     - Used for: Getting city names from user location coordinates.
3. OpenAI API:
     - Purpose: Generates natural language descriptions of weather conditions.
4. MongoDB:
     - Purpose: Stores user information and historical weather data.
5. Nodemailer:
    - Purpose: Sends emails to users.
  
# Answers for Questions
1. To use Google Cloud to get the city name from coordinates, you'll be using the Google Maps Geocoding API.Send the latitude and longitude to Google's API.The API returns various 
   address components and extract the city name from these components.
2.
3.
4. I couldn't get the Google MapAPI key, that's why the response is empty. 
{
	"info": {
		"_postman_id": "b4616df5-4149-4acb-ba9e-046009beced2",
		"name": "weatherReport",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "25024499"
	},
	"item": [
		{
			"name": "add User Details",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"email\": \"sandeeparathnayaka00@gmail.com\",\r\n  \"latitude\": 40.7128,\r\n  \"longitude\": -74.0060\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update User's Weather Data",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"latitude\": 51.5074,\r\n  \"longitude\": -0.1278\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users/sandeeparathnayaka20@gmail.com/location",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users",
						"sandeeparathnayaka20@gmail.com",
						"location"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get User's Weather Data",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/users/sandeeparathnayaka20@gmail.com/weather?date=2024-07-11",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"users",
						"sandeeparathnayaka20@gmail.com",
						"weather"
					],
					"query": [
						{
							"key": "date",
							"value": "2024-07-11"
						}
					]
				}
			},
			"response": []
		}
	]
}
