import React, { Component, Fragment } from 'react';
import CircleMap from '../CircleMap/CircleMap';
import './MapboxMap.css';


let zoom = window.innerWidth > 400 ? 5 : 4;
let center = window.innerWidth > 400 ? [51.184179, -121.752423] : [52.184179, -121.752423];

export class MapBoxMap extends Component {
	map_options = {
		center: center,
		classField: 'FIRE_STATU',
		maxZoom: 8,
		minZoom: 3,
		zoom: zoom
	}

	render() {
		return (
			<Fragment>
				<h1>Mapbox Map</h1>

				<CircleMap
					center={this.map_options.center}
					circleMarkerClassField={this.map_options.classField}
					config={this.props.config}
					container="mapview"
					data={this.props.data}
					mapboxStyle={this.props.mapboxStyle}
					maxZoom={this.map_options.maxZoom}
					minZoom={this.map_options.minZoom}
					zoom={this.map_options.zoom}>
				</CircleMap>
			</Fragment>
		);
	}
}

export default MapBoxMap;
