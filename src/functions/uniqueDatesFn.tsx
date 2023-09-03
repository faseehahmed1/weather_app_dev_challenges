import { RootAPI } from "../Interface/APIInterface";

const uniqueDate = (data: any)=>{
    const uniqueDates = new Set();
    const filteredData = data.list.filter((item: RootAPI) => {
        const date = item.dt_txt.split(" ")[0];
        if (!uniqueDates.has(date)) {
          uniqueDates.add(date);
          return true;
        }
        return false;
      });
    return filteredData;
}

export default uniqueDate;