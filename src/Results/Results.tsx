import classes from "./Results.module.css";
import TempOption from "../TempOption/TempOption";
import WeatherCard from "../WeatherCard/WeatherCard";
import HighlightCard from "../HighlightCard/HighlightCard";
import { RootAPI } from "../Interface/APIInterface";

interface ResultsProps {
  setUnit: (data: string) => void; 
  data: RootAPI[]; // Can be an array of RootAPI or an empty array
  unit: string;
}

export default function Results({ data, setUnit, unit }:ResultsProps) {

  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <TempOption setUnit={setUnit}/>
        <WeatherCard data={data} unit={unit}/>
        <p className={classes.title}>Today's Highlights</p>
        <HighlightCard data={data} unit={unit}/>
      </div>
    </div>
  );
}
