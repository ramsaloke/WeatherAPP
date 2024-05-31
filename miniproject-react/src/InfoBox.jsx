import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import "./Infobox.css";

export default function InfoBox({info}){
    const init_url = "https://images.unsplash.com/photo-1627484839566-1a0ee52f47c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=1024x1024&w=is&k=20&c=_BhqDLHNgI_I_yv-bOijnAShJGYMiAogerJhWG4oKAc=";
    const COLD_URL = "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q09MRCUyMFdFQVRIRVIlMjBJTUFHRVN8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";


    return(
        <div className="infobox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia style={{textAlign: "center"}}
        sx={{ height: 140 }}
        image= {info.humidity > 80? RAIN_URL:  info.temp > 17 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b>{info.city}
         {info.humidity > 80? <BeachAccessOutlinedIcon></BeachAccessOutlinedIcon>
         :  info.temp > 17 ? <WbSunnyIcon></WbSunnyIcon>
         : <AcUnitIcon></AcUnitIcon> }
         </b>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Max Temperature = {info.temp_max}&deg;C</p>
        <p>Min Temperature = {info.temp_min}&deg;C</p>
        <p>The Weather can be described as <b>{info.weather}</b>  and
        feels like {info.feelsLike}&deg;C
        </p>


        </Typography>
      </CardContent>
  
    </Card>
    </div>
           
        </div>
    )
}