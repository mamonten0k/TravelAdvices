import axios from "axios";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "60c75fbb31msh61a3da140b71e01p17ed49jsn57f233411a04",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
