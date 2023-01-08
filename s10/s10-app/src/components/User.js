import './User.css'

function User(props) {
	const {item}  = props

	return (
		<div className="user">
			<div> 
				{item.firstName}
			</div>
			<div> 
				{item.email}
			</div>

		</div>
	)
}

export default User;
 