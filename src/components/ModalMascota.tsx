import React from 'react'
import { Modal } from './Modal'
import { Button } from './Button'

interface ModalMascotaProps {
  isModalOpen: boolean
  closeFunction: () => void
  imagenUrl?: string
  title: string
  text: string
}

export const ModalMascota: React.FC<ModalMascotaProps> = ({
  isModalOpen,
  closeFunction,
  imagenUrl,
  title,
  text
}) => {
  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        closeFunction={() => {
          closeFunction()
        }}>
        <img src={imagenUrl} alt='' />
        <h3>{title}</h3>
        <p>{text}</p>
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
