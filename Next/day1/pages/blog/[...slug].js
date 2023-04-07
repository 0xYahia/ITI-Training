import { useRouter } from 'next/router'
import React from 'react'

const Blog = () => {
	const router = useRouter();
	console.log(router.query)
	return (
		<div>Blog</div>
	)
}

export default Blog