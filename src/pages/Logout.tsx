import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { UserContext } from '../components/UserProvider'
import { routes } from '../constants'

export const Logout: React.FC = () => {
  const navigate = useNavigate()
  const { handleLogout } = useContext(UserContext)!

  const handleLog = () => {
    handleLogout()
  }

  return (
    <>
      <div>
        <div className='flex justify-between text-center mb-6'>
          <Title as='h2'>Su sesion ha expirado...</Title>
        </div>
        <div id='login' className='flex justify-center'>
          <div className='font-sans space-y-4 w-80'>
            <div className='mb-3 flex flex-col'>
              <Button type='button' className='w-full' onClick={handleLog}>
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
      </div>
    </>
  )
}
