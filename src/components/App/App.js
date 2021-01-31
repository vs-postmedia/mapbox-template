import React from 'react';
import Main from '../Main/Main';
import './App.css';
import mapboxConfig from '../../data/mapbox-config';


// Wildfires url
const currentFiresURL = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/wildfires.json';

// map tiles & attribution
const mapboxStyle = 'mapbox://styles/mapbox/outdoors-v11';


function App() {
	return (
		<Main
			currentData={currentFiresURL}
			mapboxConfig={mapboxConfig}
			mapboxStyle={mapboxStyle}>
		</Main>
	);
}

export default App;
