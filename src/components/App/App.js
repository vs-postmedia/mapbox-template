import React from 'react';
import MapboxMap from '../MapboxMap/MapboxMap';
import './App.css';
import mapboxConfig from '../../data/mapbox-config';


// Wildfires url
const mapData = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/wildfires.json';

// map tiles & attribution
const mapboxStyle = 'mapbox://styles/mapbox/outdoors-v11';

// map options
const mapOptions = {
	center: window.innerWidth > 400 ? [51.184179, -121.752423] : [52.184179, -121.752423],
	classField: 'FIRE_STATU',
	maxZoom: 8,
	minZoom: 3,
	zoom: window.innerWidth > 400 ? 5 : 4
}


function App() {
	return (
		<MapboxMap
			data={mapData}
			mapboxConfig={mapboxConfig}
			mapboxStyle={mapboxStyle}
			mapOptions={mapOptions}>
		</MapboxMap>
	);
}

export default App;
