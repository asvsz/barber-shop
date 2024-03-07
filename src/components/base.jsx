import { NaviButtons } from "./navigation-buttons"

function Base({children}) {
  return (
    <div className="flex bg-primary justify-center py-10 font-custom min-h-screen">
      <div className="flex flex-col w-4/5">
        <NaviButtons/>
        {children}
      </div>
    </div>
  )
}

export default Base