import classes from "./HighlightCard.module.css";

export default function HighlightCard() {
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <p>Wind Status</p>
        <div className={classes.number_container}>
          <h2>7</h2>
          <h3>mph</h3>
        </div>
      </div>
      <div className={classes.container}>
        <p>Humidity</p>
        <div className={classes.number_container}>
          <h2>8</h2>
          <h3>%</h3>
        </div>
      </div>
      <div className={classes.container}>
        <p>Visibilty</p>
        <div className={classes.number_container}>
          <h2>64</h2>
          <h3>miles</h3>
        </div>
      </div>
      <div className={classes.container}>
        <p>Air Pressure</p>
        <div className={classes.number_container}>
          <h2>998</h2>
          <h3>mb</h3>
        </div>
      </div>
    </div>
  );
}
