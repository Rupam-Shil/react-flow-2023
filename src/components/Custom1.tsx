import React, { memo } from 'react';
import { NodeResizer } from 'reactflow';

function Custom1({ data, selected }: any) {
	return (
		<>
			<NodeResizer
				color="#ff0071"
				isVisible={selected}
				minWidth={100}
				minHeight={30}
			/>
			<div className="dottedBg">
				<div className="dottedBg-main"></div>
				<div className="label">{data.label}</div>
			</div>
		</>
	);
}

export default memo(Custom1);
