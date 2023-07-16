import React, { useEffect, useState } from "react";
import Createframe from "./createframe";
import Footer from "./footer";
import axios from "axios";
import { image1, image2, image3 } from "./image";
import { DateTime } from "luxon";
import _ from "lodash";
import getDefaultData from "./defaultdata";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [backGroundimage, setbackgroundimage] = useState(image3);
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    getDefaultData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchWeatherData();
    }
  }

  function handleInputChange(event) {
    setInputCity(event.target.value);
  }

  function fetchWeatherData() {
    const API_KEY = "T9H9SZJY7W69AZFBE8C3PE8SE";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputCity}/today?key=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    var length = DateTime.now()
      .setZone(weatherData?.timezone)
      .toLocaleString(DateTime.DATETIME_MED).length;
    console.log(
      DateTime.now()
        .setZone(weatherData?.timezone)
        .toLocaleString(DateTime.DATETIME_MED)
    );
    var hours = DateTime.now()
      .setZone(weatherData?.timezone)
      .toLocaleString(DateTime.DATETIME_MED)
      .substring(length - 8, length - 6);
    var am_pm = _.upperCase(
      DateTime.now()
        .setZone(weatherData?.timezone)
        .toLocaleString(DateTime.DATETIME_MED)
        .substring(length - 2, length)
    );
    var hn = Number(hours);

    if (hn < 12 && am_pm === "AM") {
      setbackgroundimage(image1);
    } else if ((hn < 6 && am_pm === "PM") || (hn === 12 && am_pm === "PM")) {
      setbackgroundimage(image2);
    } else if (hn > 6 && hours < 12 && am_pm === "PM") {
      setbackgroundimage(image3);
    }
  }, [weatherData]);

  return (
    <div
      style={{
        backgroundImage: `url(${backGroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
      }}
    >
      <Createframe
        windspeed={weatherData?.currentConditions?.windspeed}
        humidity={weatherData?.currentConditions?.humidity}
        temp={weatherData?.currentConditions?.temp}
        name={weatherData?.address}
        description={weatherData?.days?.[0]?.conditions}
        timezone={weatherData?.timezone}
        icon={weatherData?.days?.[0]?.icon}
        latitude={weatherData?.latitude}
        longitude={weatherData?.longitude}
        handleKeyDown={handleKeyDown}
        inputCity={inputCity}
        handleInputChange={handleInputChange}
      />
      <Footer />
    </div>
  );
}



//https://demos.creative-tim.com/blk-design-system-react/#/components

//https://www.npmjs.com/package/react-translate
