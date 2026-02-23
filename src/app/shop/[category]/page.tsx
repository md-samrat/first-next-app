import React from 'react'

async function Category({params}:{params:{category:string}}) {
    const {category} = await params
  return (
    <div>Category-{category}</div>
  )
}

export default Category