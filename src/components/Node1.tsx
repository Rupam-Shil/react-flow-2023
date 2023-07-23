import React from 'react';

function Node1({ data }: any) {
	return <div className="node">{data.label || 'test'}</div>;
}

export default Node1;
