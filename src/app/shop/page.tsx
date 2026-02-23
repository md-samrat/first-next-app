import React from 'react'

function Shop() {
  return (
    <div>
        <h1 className='text-xl font-semibold'>Shop Page</h1>
        <p>Categories:</p>
        <h3>Example</h3>
        <ul className='flex items-center gap-8 list-disc'>
            <li>Phone</li>
            <li>Laptop</li>
            <li>Books</li>
        </ul>
    </div>
  )
}

export default Shop