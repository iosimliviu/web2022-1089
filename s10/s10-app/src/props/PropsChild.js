
function PropsChild(props) {
	const {item } = props

	return (
		<div>
			I am item <b>{item.id}</b> with description <b>{item.description}</b>
		</div>
	);
 }
 
 export default PropsChild
 