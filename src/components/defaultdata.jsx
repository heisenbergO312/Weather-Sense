import axios from "axios";

function getDefaultData() {
  const API_KEY = "T9H9SZJY7W69AZFBE8C3PE8SE";
  const city = "delhi";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${API_KEY}`;

  return axios.get(url).then((response) => response.data);
}

export default getDefaultData;
