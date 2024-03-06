import { NaviButtons } from "./navigation-buttons"

function Base({children}) {
  return (
    <div className="flex h-screen w-screen bg-primary justify-center py-10 font-custom">
      <div className="flex flex-col z-10">
        <NaviButtons/>
        {children}
      </div>
    </div>
  )
}

export default Base