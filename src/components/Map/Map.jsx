import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'
import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates}) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');
	return(
		<div className={classes.mapContainer}>
			<GoogleMapReact 
				bootstrapURLKeys={{key: 'AIzaSyDnXsyiOHJ_vLvuEmbVb7gbt7GDRCk6r7k'}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={12}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={(e) => {
					StCoordinates({ lat: e.center.lat, lng: e.center.lng });
					stBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				  }}
				onChildClick={''}
			>
			</GoogleMapReact>
		</div>
	)
}

export default Map;