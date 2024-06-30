import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserProvider'
import { routes } from '../constants'
import { Modal } from './Modal'
import { Title } from './Title'

interface ModalTokenExpiredProps {
  isModalOpen: boolean
  closeFunction: () => void
}

export const ModalTokenExpired: React.FC<ModalTokenExpiredProps> = ({
  isModalOpen,
  closeFunction
}) => {
  const navigate = useNavigate()
  const { handleLogout } = useContext(UserContext)!

  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      handleLogout()
      navigate(routes.home.url)
      closeFunction() // Close the modal when the countdown ends
    }, 5000)

    return () => {
      clearInterval(countdown)
      clearTimeout(timeout)
    }
  }, [handleLogout, navigate, closeFunction])

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        closeFunction={() => {
          closeFunction()
        }}>
        <div className='flex justify-between text-center mb-6'>
          <Title as='h2'>
            Su sesión ha expirado... deslogeando en {seconds}
          </Title>
        </div>
      </Modal>
    </>
  )
}
