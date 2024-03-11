function BoxCard({ children }) {
  return (
    <div className=" bg-secondary rounded-lg overflow-y-auto mt-5 p-5">
      <div className="flex justify-between font-semibold text-center w-4/5">
        <p className="w-1/4">Horário</p>
        <p className="w-1/4">Cliente</p>
        <p className="w-1/4">Telefone</p>
        <p className="w-1/4">Status</p>
      </div>
      {children}
    </div>
  )
}

export default BoxCard