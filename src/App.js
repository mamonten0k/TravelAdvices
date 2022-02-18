import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api/index";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
      });
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={3}
        style={{
          width: "100%",
          margin: "0",
        }}
      >
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coords={coords}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};
// style={{ maxWidth: "960px" }}
// style={{ maxWidth: "100%" }}
export default App;
