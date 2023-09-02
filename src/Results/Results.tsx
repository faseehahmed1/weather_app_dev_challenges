import classes from "./Results.module.css";
import TempOption from "../TempOption/TempOption";
import WeatherCard from "../WeatherCard/WeatherCard";
import HighlightCard from "../HighlightCard/HighlightCard";

export default function Results() {
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <TempOption />
        <WeatherCard />
        <p className={classes.title}>Today's Highlights</p>
        <HighlightCard />
      </div>
    </div>
  );
}
