import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
        city:"Hyderabad",
        weather:"haze",
        temp: 34.5,
        temp_max:  40,
        temp_min: 29,
        feelsLike: 24.9,
        humidity:  24,
        pressure:  22,
    });

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App </h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
            
            </div>
    )
}