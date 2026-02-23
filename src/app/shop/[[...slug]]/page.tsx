import { notFound } from "next/navigation"

async function Products({params}:{params:Promise<{slug:string[]}>}) {
  const {slug} = await params

  if(slug?.length >3){
    notFound()
  }
  return (
    <div>
      <h1>Products</h1>
      <div>
        {
          slug?.length > 0 && slug.map((item,idx)=><p key={idx}>{item}</p>)
        }
      </div>
    </div>
  )
}

export default Products
