import Link from 'next/link'
import React from 'react'

const Categories = () => {
	const categories  = [
		{id:1,title:'category 1'},
		{id:2,title:'category 2'},
	]
	return (
		<>
		<div>
			{categories.map(cat=>(<h1 key={cat.id}>
				
				<Link href={`/categories/${cat.id}`}><h1 style={{color:'green'}}>{cat.title}</h1></Link>
				
				</h1>))}
		</div>
		<Link href="/"><button style={{color:'green'}}>Go Back</button></Link>
		</>

	)
}

export default Categories