import React from 'react' ;
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<React.Fragment>
			<div>Not found</div>
			<Link to={"/"}>Back to main</Link>
		</React.Fragment>
	)
}