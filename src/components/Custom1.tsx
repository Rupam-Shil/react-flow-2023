import React, { useEffect } from 'react';

function Custom1(props: any) {
	useEffect(() => {
		console.log('Custom1', props);
	}, []);
	return (
		<div>
			<div className="dottedBg">
				<div className="dottedBg-main"></div>
				<div className="label">{props.data.label}</div>
			</div>
		</div>
	);
}

export default Custom1;
