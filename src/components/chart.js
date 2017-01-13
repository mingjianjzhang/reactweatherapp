import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
	return _.round(_.sum(data)/data.length);
}
export default (props) => {
	return (
		<div>
			<Sparklines
				data= {props.weatherData}
				width= {400}
				height = {100}>
				<SparklinesLine color = {props.color}/>
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
			<div>
				{average(props.weatherData)} {props.units}
			</div>
		</div>
	)
}
