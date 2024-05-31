import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Searchbox.css";

export default function SearchBox({updateInfo}){
    let [city, setcity]= useState("");
    let [error,seterror] = useState(false);
    const API_URL = " https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e1123bee0639215434f67f478623b7f0"

    let getWeatherInfo = async()=>{
      try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
    //   console.log(jsonResponse);
    
      let result = {
        city: jsonResponse.name,
        weather:jsonResponse.weather[0].description,
        temp: jsonResponse.main.temp,
        temp_max:  jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feelsLike: jsonResponse.main.feels_like,
        humidity:  jsonResponse.main.humidity,
        pressure:  jsonResponse.main.pressure,

      };
      console.log(result);
      return result;
    } catch (error) {
       throw err;
       
    }
};
 
    let handleChange = (evnt) => {
        setcity(evnt.target.value);
    }
    let handleSubmit = async(evnt)=>{
      try{
        evnt.preventDefault();
        // console.log(city);
        setcity("");
        let newInfo =  await getWeatherInfo();
        updateInfo(newInfo);
      } catch(err){
        seterror(true)
      }

    }
    return(
       <div className="Searchbox">
       
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required
        onChange={handleChange} value={city}
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error &&  <p style={{color:"re"}}>No Such Place exists!</p>}
        </form>
        </div> 
    )
}