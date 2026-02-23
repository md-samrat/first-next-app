
function DashBoardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex gap-1 p-3 h-screen w-full">
        <div className="border p-6 w-[350px]">Aside</div>
        <div className="p-6 w-full border">{children}</div>
    </div>
  )
}

export default DashBoardLayout