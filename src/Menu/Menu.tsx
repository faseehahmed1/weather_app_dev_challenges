import classes from "./Menu.module.css";
import shower from "../assets/Shower.png";
// import cloud_bg from "../assets/Cloud-background.png";
import { useState } from "react";
import clsx from "clsx";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
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
              <h1>15</h1>
              <h4>°C</h4>
            </div>
            <h3>Shower</h3>
            <h5>Today · Fri, 5 Jun</h5>
            <div className={classes.location_container}>
              <span className="material-symbols-outlined">location_on</span>
              <h5>London</h5>
            </div>
          </div>
        </>
      )}
      {isOpen && (
        <div className={classes.menu_container}>
          <div className={classes.close_btn_container}>
            <button className={classes.close_btn} onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className={classes.search_container}>
            <input
              className={classes.input_container}
              type="text"
              placeholder="search location"
            />
            <span
              className={`material-symbols-outlined ${classes.search_icon}`}
            >
              search
            </span>
            <button className={classes.search_btn}>Search</button>
          </div>
        </div>
      )}
    </div>
  );
}
