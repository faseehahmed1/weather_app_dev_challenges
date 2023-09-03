import clear from "../assets/Clear.png";
import lightCloud from "../assets/LightCloud.png";
import scatteredClouds from "../assets/HeavyCloud.png";
import lightRain from "../assets/LightRain.png";
import rain from "../assets/HeavyRain.png";
import thunderStrom from "../assets/Thunderstorm.png";
import snow from "../assets/Snow.png";
import sleet from "../assets/Sleet.png";

const iconFn = (icon: string) => {
  switch (icon) {
    case "01d":
    case "01n":
      return clear;
    case "02d":
    case "02n":
      return lightCloud;
    case "03d":
    case "03n":
      return scatteredClouds;
    case "04d":
    case "04n":
      return scatteredClouds;
    case "09d":
    case "09n":
      return lightRain;
    case "10d":
    case "10n":
      return rain;
    case "11d":
    case "11n":
      return thunderStrom;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return sleet;
    default:
      return clear;
  }
};

export default iconFn;
