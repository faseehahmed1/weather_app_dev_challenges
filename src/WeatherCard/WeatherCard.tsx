import classes from "./WeatherCard.module.css";
import lightCloud from "../assets/LightCloud.png";

export default function WeatherCard() {
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <p>Tomorrow</p>
        <img src={lightCloud} alt="weather icon" width={62} height={57} />
        <div className={classes.temp_container}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
      <div className={classes.container}>
        <p>Tomorrow</p>
        <img src={lightCloud} alt="weather icon" width={62} height={57} />
        <div className={classes.temp_container}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
      <div className={classes.container}>
        <p>Tomorrow</p>
        <img src={lightCloud} alt="weather icon" width={62} height={57} />
        <div className={classes.temp_container}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
      <div className={classes.container}>
        <p>Tomorrow</p>
        <img src={lightCloud} alt="weather icon" width={62} height={57} />
        <div className={classes.temp_container}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
      <div className={classes.container}>
        <p>Tomorrow</p>
        <img src={lightCloud} alt="weather icon" width={62} height={57} />
        <div className={classes.temp_container}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
    </div>
  );
}
