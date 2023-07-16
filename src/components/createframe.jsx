import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { DateTime } from "luxon";
import { ReactSVG } from "react-svg";
import _ from "lodash";
import axios from "axios";

import {
  styleTime,
  styleDay,
  stylewindSpeed,
  stylehumidity,
  styletemp,
  weatherFrame,
  styleInput,
  stylename,
  styledescription,
  styleIcon,
  styleBox
} from "./styles";

export default function Createframe(props) {
  const [cityName, setCityName] = useState(null);

  const [time, setTime] = useState(
    DateTime.now()
      .setZone(props.timezone)
      .toLocaleString(DateTime.DATETIME_MED)
      .substring(13, 22)
  );
  const [currentDay, setCurrentDay] = useState(
    DateTime.now()
      .setZone(props.timezone)
      .toLocaleString(DateTime.DATETIME_MED)
      .substring(0, 12)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        DateTime.now()
          .setZone(props.timezone)
          .toLocaleString(DateTime.DATETIME_MED)
          .substring(13, 22)
      );
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [props.timezone]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDay(
        DateTime.now()
          .setZone(props.timezone)
          .toLocaleString(DateTime.DATETIME_MED)
          .substring(0, 12)
      );
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [props.timezone]);

  useEffect(() => {
    const API_KEY = "Pj7ovbrJBZW42utUv1I6V1eedmV8mzW5TTk8bLeH4fg";
    const latitude = props.latitude;
    const longitude = props.longitude;
    const url = `https://geocode.search.hereapi.com/v1/revgeocode?at=${latitude},${longitude}&apiKey=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        setCityName(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.latitude, props.longitude]);

  return (
    <div>
      <Paper sx={styleInput}>
        <TextField
          fullWidth
          label="Enter city"
          id="fullWidth"
          value={props.inputCity}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyDown}
          sx={styleBox}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "gray", marginRight: "5px" }} />
            ),
            sx: { borderRadius: "40px" },
            autoComplete: "off"
          }}
        />
      </Paper>

      <Paper elevation={4} sx={weatherFrame}>
        <div title="time" style={styleTime}>
          <AccessTimeFilledRoundedIcon />
          {time}
        </div>
        <div title="day" style={styleDay}>
          {currentDay}
        </div>
        <div title="windSpeed" style={stylewindSpeed}>
          <AirIcon />
          {props.windspeed} Km/Hr
        </div>
        <div title="humidityPercentage" style={stylehumidity}>
          <OpacityIcon />
          {props.humidity} %
        </div>
        <div title="name" style={stylename}>
          {_.startCase(_.toLower(props.name))},
          {cityName?.items?.[0]?.address?.countryCode}
        </div>
        <div title="description" style={styledescription}>
          {props.description}
        </div>
        <div title="Icon" style={styleIcon}>
          {/* <img src={`./icons/${props.icon}.png`} alt="icon" /> */}
          <ReactSVG src="https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/clear-day.svg" />
        </div>
        <div title="temp" style={styletemp}>
          {(((props.temp - 32) * 5) / 9).toFixed(1)}°C
        </div>
      </Paper>
    </div>
  );
}
