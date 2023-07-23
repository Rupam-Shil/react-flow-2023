import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
	Background,
	BackgroundVariant,
	Connection,
	Controls,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Custom1 from './components/Custom1';
import Node1 from './components/Node1';

const initialNodes: Node[] = [
	{
		id: '1',
		data: { label: 'Hello' },
		position: { x: 0, y: 0 },
		type: 'group',
		resizing: true,
		style: {
			height: 'max-content',
			width: 'fit-content',
		},
	},
	{
		id: '2',
		data: { label: 'World' },
		position: { x: 100, y: 100 },
		type: 'group',
		resizing: true,
	},
	{
		id: '4',
		data: { label: 'm' },
		position: { x: 0, y: 0 },
		type: 'node',
		parentNode: '1',
		extent: 'parent',
	},
	{
		id: '4a',
		data: { label: 'asdfasdf' },
		position: { x: 100, y: 0 },
		type: 'node',
		parentNode: '1',
		extent: 'parent',
	},
	{
		id: '5',
		data: { label: 'f' },
		position: { x: 100, y: 100 },
		type: 'node',
		parentNode: '2',
		extent: 'parent',
	},
];

const initialEdges: Edge<any>[] = [
	// { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
];

const App = () => {
	const [nodes, setNodes] = useState<any>(initialNodes);
	const [edges, setEdges] = useState<any>(initialEdges);

	const onNodesChange = useCallback((changes: NodeChange[]) => {
		console.log('onNodesChange', changes);
		setNodes((nds: any) => applyNodeChanges(changes, nds));
	}, []);
	const onEdgesChange = useCallback((changes: EdgeChange[]) => {
		console.log('onEdgesChange', changes);
		setEdges((eds: any) => applyEdgeChanges(changes, eds));
	}, []);

	const onConnect = useCallback((params: Edge | Connection) => {
		console.log(params);
		setEdges((eds: Edge[]) => addEdge(params, eds));
	}, []);

	const nodeTypes = useMemo(() => ({ textUpdater: Custom1, node: Node1 }), []);
	return (
		<>
			<div className="canvas">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onNodesChange={onNodesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					proOptions={{ hideAttribution: true }}
				>
					<Background
						color="#333333"
						gap={20}
						variant={BackgroundVariant.Dots}
					/>

					<Controls />
				</ReactFlow>
			</div>
		</>
	);
};

export default App;
