import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { twMerge } from 'tailwind-merge'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isModalOpen: boolean
  closeFunction: () => void
}

export const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  closeFunction,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(isModalOpen)

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true)
    }
  }, [isModalOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      closeFunction()
    }, 300) // Duration should match the transition duration
  }

  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <>
          <div
            onClick={handleClose}
            className={twMerge(
              `fixed inset-0 bg-gray-500 transition-all duration-700 ease-in-out`,
              isVisible ? 'opacity-50' : 'opacity-0'
            )}></div>
          <div
            {...props}
            className={twMerge(
              `sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 p-6 bg-tertiary-grade5 rounded-lg top-1/2 left-1/2 -translate-x-1/2 fixed transition-all duration-700 ease-in-out`,
              props.className,
              isVisible
                ? 'opacity-100 -translate-y-1/2'
                : 'opacity-0 translate-y-4'
            )}>
            {props.children}
          </div>
        </>
      )}
    </>,
    document.body
  )
}
