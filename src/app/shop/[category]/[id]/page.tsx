import React from 'react'

async function DetailsPage({params}:{params:{id:string,category:string}}) {
    const {id,category} = await params
  return (
    <div>
        <h1>Product details</h1>
        <p>category is : {category} <br /> id is : {id}</p>
    </div>
  )
}

export default DetailsPage