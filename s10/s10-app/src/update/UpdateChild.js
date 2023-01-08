import { useState, useEffect } from 'react'


function UpdateChild(props) {
	const {item} = props
	const [content, setContent] = useState({})

	console.log(item)

	const getPost = async(id) => {
		// const response = await fetch('https://www.reddit.com/r/Chonkers/top.json?t=month')

		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		const data = await response.json();

		console.log(data)
		setContent(data)
	}

	useEffect(() => {
		getPost(parseInt(item))
	} ,[item] //se apeleaza cand se schimba ceva in array-ul acesta

	) 
	return (
		<div>
			for<b>{item.id}</b> content is<b>{content.title}</b>
		</div>
	);
 }
 
 export default UpdateChild
 