import { useRouter } from 'next/router'
import React from 'react'

const Category = () => {
	const router = useRouter();
	const {id} = router.query;
	const getProduct1= ()=>{
		//some logic
		console.log('hello')
		router.push('/categories/1/1')
	}
	return (
		<><div>Single Category with id {id}</div>
		<button onClick={getProduct1}>Click to go to product 1</button></>
	)
}

export default Category