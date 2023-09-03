import { useEffect, useState } from "react";
import uniqueDate from "../functions/uniqueDatesFn";
import { RootAPI } from "../Interface/APIInterface";

function useFetch(locationInput: string, unit: string, triggerFetch: boolean){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<RootAPI[]>([]);
    const [inError, setInError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput}&units=${unit}&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
              }`
            );
    
            if (!response.ok) {
              throw new Error("Error with fetch!");
            }
    
            const data = await response.json();
            const filteredData = uniqueDate(data);
    
            setIsLoading(false);
            setData(filteredData);
          } catch (error) {
            setInError(true);
            console.error(error);
          }
        })();
      }, [triggerFetch, unit]);

      return {
        data,
        isLoading,
        inError
      };
}

export default useFetch;
