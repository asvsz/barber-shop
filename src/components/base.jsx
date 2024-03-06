import { NaviButtons } from "./navigation-buttons"

function Base({children}) {
  return (
    <div className="flex h-screen w-screen bg-zinc-100 justify-center py-10">
      <div className="flex flex-col z-10">
        <NaviButtons/>
        {children}
      </div>
    </div>
  )
}

export default Base