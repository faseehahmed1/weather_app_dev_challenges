import classes from "./WeatherCard.module.css";
import formatDate from "../functions/dateFn";
import iconFn from "../functions/imageFn";
import { RootAPI } from "../Interface/APIInterface";

interface HighlightCardProps {
  data: RootAPI[];
  unit: string;
}

export default function WeatherCard({ data, unit }: HighlightCardProps) {
  return (
    <div className={classes.outer_container}>
      {data.slice(1).map((item, index) => {
        const {
          main: { temp_min, temp_max },
          weather: [{ icon }],
          dt_txt: dateTimeText,
        } = item;

        const newDateFormat = formatDate(dateTimeText);
        const iconF = iconFn(icon);
        const dateLabel = index === 0 ? 'Tomorrow' : newDateFormat;
        const unitSymbol = unit === "metric" ? "°C" : "°F";

        return (
          <div className={classes.container} key={index}>
            <p>{dateLabel}</p>
            <img src={iconF} alt="weather icon" width={62} height={57} />
            <div className={classes.temp_container}>
              <p>{Math.round(temp_max)}{unitSymbol}</p>
              <p>{Math.round(temp_min)}{unitSymbol}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
