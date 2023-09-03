import classes from "./Menu.module.css";
import shower from "../assets/Shower.png";
// import cloud_bg from "../assets/Cloud-background.png";
import { useState } from "react";
import { RootAPI } from "../Interface/APIInterface";
import formatDate from "../functions/dateFn";

interface MenuProps {
  data: RootAPI[]; // Can be an array of RootAPI or an empty array
  locationInput: string;
  inError: boolean;
  unit: string;
  setLocationInput: (data: string) => void;
  setTriggerFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({
  data,
  locationInput,
  setTriggerFetch,
  inError,
  unit,
  setLocationInput,
}: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    main: { temp },
    weather: [{ description }],
    dt_txt: dateTimeText,
  } = data[0];

  const newDateFormat = formatDate(dateTimeText);

  return (
    <div className={classes.container}>
      {!isOpen && (
        <>
          <div className={classes.button_container}>
            <button
              className={classes.search_button}
              onClick={() => setIsOpen(!isOpen)}
            >
              <p>Search for places</p>
            </button>
            
            <button className={classes.my_location}>
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
          <div className={classes.image_container}>
            {/* <img
          className={classes.cloud_bg_img}
          src={cloud_bg}
          alt="cloub background"
        /> */}
            <img
              className={classes.current_weather_img}
              src={shower}
              alt="cloud image"
              height="174px"
              width="150px"
            />
          </div>
          <div className={classes.info_container}>
            <div className={classes.temp_container}>
              <h1>{Math.round(temp)}</h1>
              <h4>{unit === "metric" ? "°C" : "°F"}</h4>
            </div>
            <h3>{description.at(0).toUpperCase() + description.slice(1)}</h3>
            <h5>Today · {newDateFormat}</h5>
            <div className={classes.location_container}>
              <span className="material-symbols-outlined">location_on</span>
              <h5>
                {locationInput.at(0).toUpperCase() + locationInput.slice(1)}
              </h5>
            </div>
          </div>
        </>
      )}
      {isOpen && (
        <div className={classes.menu_container}>
          <div className={classes.close_btn_container}>
            <button
              className={classes.close_btn}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className={classes.search_container}>
            <input
              className={classes.input_container}
              type="text"
              placeholder="search location"
              onChange={(e)=>setLocationInput(e.target.value)}
            />
            <span
              className={`material-symbols-outlined ${classes.search_icon}`}
            >
              search
            </span>
            <button className={classes.search_btn} onClick={()=>setTriggerFetch((prev)=>!prev)}>Search</button>
          </div>
          {inError && <p>No Results Found 😕!</p>}
        </div>
      )}
    </div>
  );
}
