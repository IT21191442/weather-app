const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

async function getCityFromCoordinates(latitude, longitude) {
  try {
    const response = await client.reverseGeocode({
      params: {
        latlng: [latitude, longitude],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      const addressComponents = response.data.results[0].address_components;
      const city = addressComponents.find(
        (component) => component.types.includes("locality")
      );
      return city ? city.long_name : "Unknown City";
    }
    return "Unknown City";
  } catch (error) {
    console.error("Error getting city name:", error);
    return "Unknown City";
  }
}

module.exports = { getCityFromCoordinates };