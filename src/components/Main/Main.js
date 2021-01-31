import Axios from 'axios';
import MapBoxMap from '../MapboxMap/MapboxMap';
import React, { Component, Fragment } from 'react';


export class WildfireTracker extends Component {

	state = {
		data: [],
		data_all: [],
		data_fon: []
	}

	componentDidMount() {
		Axios.get(this.props.currentData)
			.then(resp => {
				// filter "out" fires so they don't overwhelm map
				const noOut = {
					type: 'FeatureCollection',
					features: resp.data.features.filter(d => d.properties.FIRE_STATU !== 'Out')
				};

				// update our state with the new data
				this.setState({
					data: noOut,
					data_all: resp.data,
				});
			});
	}


	render() {
		return (
			<Fragment>
				<MapBoxMap 
					config={this.props.mapboxConfig}
					data={this.state.data}
					data_all={this.state.data_all}
					mapboxStyle={this.props.mapboxStyle}
					tiles={this.props.tiles}>
				</MapBoxMap>
			</Fragment>
		);
	}
}

export default WildfireTracker;