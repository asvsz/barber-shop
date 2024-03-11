import CustomButton from "./custom-button"

function Modal({isOpen, onClose, children}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-50">
        {children}
        <div className=" flex justify-between">
          <CustomButton type="submit" name='salvar' onClick={onClose}>
            Salvar
          </CustomButton>
          <CustomButton name='cancelar' onClick={onClose}>
            Cancelar
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default Modal 