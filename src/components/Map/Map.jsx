import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'
import useStyles from './styles';

const Map = ({coords, setBounds, setCoordinates}) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');
	return(
		<div className={classes.mapContainer}>
			<GoogleMapReact 
				bootstrapURLKeys={{key: "AIzaSyActZPB5fVEHRlS1FDq_54Fk_mdsVYJc9Q"}}
				defaultCenter={ {
					lat: 12,
					lng: 12,
				}}
				center={coords}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}	  
				options={''}	
				onChange={(e) => {
					setCoordinates({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				  }}
				// onChildClick={''}
			>
			</GoogleMapReact>	
		</div>
	)
}

export default Map;