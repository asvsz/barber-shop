function Base({children}) {
  return (
    <div className="flex h-screen w-screen bg-zinc-100 justify-center py-10">
      {children}
    </div>
  )
}

export default Base