import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { UserContext } from '../components/UserProvider'
import { routes } from '../constants'

export const Logout: React.FC = () => {
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
    }, 5000)

    return () => {
      clearInterval(countdown)
      clearTimeout(timeout)
    }
  }, [handleLogout, navigate])

  return (
    <>
      <div className='flex justify-between text-center mb-6'>
        <Title as='h2'>Su sesión ha expirado... deslogeando en {seconds}</Title>
      </div>
      <div id='login' className='flex justify-center'>
        <div className='font-sans space-y-4 w-80'>
          <div className='mb-3 flex flex-col'>
            <Button type='button' className='w-full' onClick={handleLogout}>
              Volver a logearse
            </Button>
            <Button
              type='button'
              className='w-full'
              onClick={() => {
                navigate(routes.home.url)
              }}>
              Volver a Inicio
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
