function BoxCard({ children }) {
  return (
    <div className=" bg-secondary rounded-lg overflow-y-auto mt-5 p-5">
      <div className="flex justify-between font-semibold pl-5 w-4/5">
        <p className="w-1/5">Horário</p>
        <p className="w-1/5">Cliente</p>
        <p className="w-1/5">Telefone</p>
        <p className="w-1/5">Status</p>
      </div>
      {children}
    </div>
  )
}

export default BoxCard