
async function Blog({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    console.log(id)
  return (
    <div>Blog-{id}</div>
  )
}

export default Blog