function Modal({isOpen, onClose, children}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-50">
        {children}
        <button onClick={onClose} className="mt-4 p-2 bg-gray-300 rounded">Fechar</button>
      </div>
    </div>
  )
}

export default Modal 