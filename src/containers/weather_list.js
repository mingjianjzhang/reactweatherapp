import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { connect } from 'react-redux';


class WeatherList extends Component {


	renderWeather(data) {
		const lon = data.city.coord.lon;
		const lat = data.city.coord.lat;
		const name = data.city.name;
		const temps = data.list.map(weatherData => weatherData.main.temp);
		const pressures = data.list.map(weatherData => weatherData.main.pressure);
		const humidities = data.list.map(weatherData => weatherData.main.humidity);
		return (
			<tr key={data.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart weatherData={temps} color="red" units="K"/>
				</td>
				<td>
					<Chart weatherData={pressures} color="blue" units="hPa" />
				</td>
				<td>
					<Chart weatherData={humidities} color="green" units="%" />
				</td>
			</tr>
		)
	}
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);