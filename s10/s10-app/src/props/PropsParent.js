import PropsChild from './PropsChild'

function PropsParent() {

	const data = [
		{
			description: 'test1',
			id:1
		},
		{
			description: 'test2',
			id:2
		},
		{
			description: 'test3',
			id:3
		}
	]

	return (
		<>
			{
				data.map(e => <PropsChild key={e.id} item={e}/>)     //<div key={e.id}>{e.description}</div>)
			}
		</>
	);
 }
 
 export default PropsParent;
 