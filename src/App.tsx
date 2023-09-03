import classes from "./App.module.css";
import Menu from "./Menu/Menu";
import Results from "./Results/Results";
import { useState } from "react";
import clsx from "clsx";
import useFetch from "./hooks/useFetch";

function App() {
  const [unit, setUnit] = useState<string>("metric");
  const [locationInput, setLocationInput] = useState<string>("london");
  const [triggerFetch, setTriggerFetch] = useState<boolean>(false);

  const {
    data,
    isLoading,
    inError,
  } = useFetch(locationInput, unit, triggerFetch);
  
  const containerClass = clsx(classes.container, {
    [classes.loading]: isLoading,
  });

  return (
    <div className={containerClass}>
      {isLoading && <h2>Loading...</h2>}
      {data.length > 0 && (
        <>
          <Menu
            unit={unit}
            locationInput={locationInput}
            data={data}
            setTriggerFetch={setTriggerFetch}
            setLocationInput={setLocationInput}
            inError={inError}
          />
          <Results unit={unit} setUnit={setUnit} data={data} />
        </>
      )}
    </div>
  );
}

export default App;
