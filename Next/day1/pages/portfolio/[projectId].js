import React from 'react'
import { useRouter } from 'next/router'
const Project = () => {
	const router = useRouter();
	console.log("🚀 ~ file: [projectId].js:5 ~ Project ~ router:", router.pathname)
	console.log("🚀 ~ file: [projectId].js:5 ~ Project ~ router:", router.query)
	return (
		<div>projectId</div>
	)
}

export default Project