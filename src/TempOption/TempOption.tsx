import classes from "./TempOption.module.css";
import { useState } from "react";
import clsx from "clsx";

interface UnitProps {
  setUnit: (data: string) => void;
}

export default function TempOption({ setUnit }: UnitProps) {
    const [activeUnit, setActiveUnit] = useState("°C");

    const buttons = [
      { value: "°C", unitType: "metric" },
      { value: "°F", unitType: "imperial" },
    ];

    function handleTempClick(value: string, unitType: string) {
        setActiveUnit(value);
        setUnit(unitType);
      }

  return (
    <div className={classes.button_container}>
    {buttons.map((btn) => (
      <button
        key={btn.value}
        className={clsx(classes.temp_button, {
          [classes.non_active_btn]: activeUnit !== btn.value,
        })}
        onClick={() => handleTempClick(btn.value, btn.unitType)}
      >
        {btn.value}
      </button>
    ))}
  </div>
  );
}

