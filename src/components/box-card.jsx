function BoxCard({ children }) {
  return (
    <div className=" bg-secondary rounded-lg overflow-y-auto mt-5 gap-7 p-5">
      <div className="flex justify-between font-semibold pl-4 w-4/5">
        <p className="w-1/3">Horário</p>
        <p className="w-1/3">Cliente</p>
        <p className="w-1/3">Telefone</p>
      </div>
      {children}
    </div>
  )
}

export default BoxCard