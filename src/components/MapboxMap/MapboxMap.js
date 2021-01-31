import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import CircleMap from '../CircleMap/CircleMap';
import './MapboxMap.css';



export class MapBoxMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data_all: [],
			data_display: []
		}
	}	

	componentDidMount() {
		Axios.get(this.props.data)
			.then(resp => {
				// process data here...
				const mapData = {
					type: 'FeatureCollection',
					features: resp.data.features
				};

				console.log(mapData);

				// update our state with the new data
				this.setState({
					data_all: resp.data,
					data_display: mapData,
				});
			});
	}

	render() {
		return (
			<Fragment>
				<h1>Mapbox Map</h1>

				<CircleMap
					center={this.props.mapOptions.center}
					circleMarkerClassField={this.props.mapOptions.classField}
					config={this.props.mapboxConfig}
					container="mapview"
					data={this.state.data_display}
					data_all={this.state.data_all}
					mapboxStyle={this.props.mapboxStyle}
					maxZoom={this.props.mapOptions.maxZoom}
					minZoom={this.props.mapOptions.minZoom}
					zoom={this.props.mapOptions.zoom}>
				</CircleMap>
			</Fragment>
		);
	}
}

export default MapBoxMap;
