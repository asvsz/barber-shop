function CustomButton({ children, name, onClick }) {
  
  const isCancel = name.toLowerCase() === 'sair' || name.toLowerCase() === 'cancelar'

  const buttonClasses = `shadow-md rounded-lg border px-4 py-2 ${isCancel ? 'bg-red-500 text-primary hover:bg-red-400' :
    'bg-secondary hover:bg-blue-700 text-quinary hover:text-primary'}`
  
  return (
    <div>
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}


export default CustomButton
