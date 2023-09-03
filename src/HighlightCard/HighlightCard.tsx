import classes from "./HighlightCard.module.css";
import { RootAPI } from "../Interface/APIInterface";

interface HighlightCardProps {
  data: RootAPI[];
  unit: string;
}

export default function HighlightCard({data, unit}: HighlightCardProps) {

  const {
    main: { pressure, humidity },
    visibility,
    wind: { speed },
  } = data[0];

  const renderHighlight = (label: string, value: number, unitLabel: string) => (
    <div className={classes.container}>
      <p>{label}</p>
      <div className={classes.number_container}>
        <h2>{value}</h2>
        <h3>{unitLabel}</h3>
      </div>
    </div>
  );

  return (
    <div className={classes.outer_container}>
      {renderHighlight("Wind Status", speed, unit === "metric" ? "m/s" : "mph")}
      {renderHighlight("Humidity", humidity, "%")}
      {renderHighlight("Visibility", visibility, "m")}
      {renderHighlight("Air Pressure", pressure, "mb")}
    </div>
  );
}
