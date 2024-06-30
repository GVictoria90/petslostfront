import React from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

interface ModalMascotaExitoProps {
  isModalOpen: boolean
  closeFunction: () => void
}

export const ModalMascotaExito: React.FC<ModalMascotaExitoProps> = ({
  isModalOpen,
  closeFunction
}) => {
  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        closeFunction={() => {
          closeFunction()
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='M5 13l4 4L19 7'
          />
        </svg>
        <span className='text-2xl font-medium'>Payment Successful</span>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          consequatur?
        </p>
        <Button
          onClick={() => {
            closeFunction()
          }}>
          Cerrar
        </Button>
      </Modal>
    </>
  )
}
