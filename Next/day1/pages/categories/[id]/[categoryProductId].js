import { useRouter } from 'next/router'
import React from 'react'

const CategoryProduct = () => {
	const router = useRouter()
	console.log("router queyr",router.query)
	const {categoryProductId}=router.query;
	return (
		<div>Product {categoryProductId} </div>
	)
}

export default CategoryProduct