import ReactWeather, { useWeatherBit  } from 'react-open-weather';
import React, { Component, useState  } from "react";

const Weather = ({lon, lat, name}) => {
    const { data, isLoading, errorMessage } = useWeatherBit({
        key: 'eb46a90fee384316bbeb1eae410268cc',
        lat:  lat,
        lon: lon,
        lang: 'en',
        unit: 'I', // values are (M,S,I)
      });    
      
      
      const customStyles = {
        fontFamily: 'Comfortaa',
        gradientStart:  '#545454',
        gradientMid:  '#545454',
        gradientEnd:  '#545454',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#333333',
        forecastSeparatorColor:  '#545454',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
      };

  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      unit="imperial"
      lang="en"
      locationLabel={name}
      unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
      showForecast
    />
  );
};

export default Weather;

