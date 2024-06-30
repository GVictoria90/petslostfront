import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { UserContext } from '../components/UserProvider'
import { routes } from '../constants'

export const Perfil: React.FC = () => {
  const navigate = useNavigate()
  const { user, handleLogout } = useContext(UserContext)!

  useEffect(() => {
    !user ? navigate(routes.login.url) : ''
  }, [user, navigate])

  return (
    <>
      <div>
        <div className='flex justify-between text-center mb-6'>
          <Title as='h2'>Bienvenido {user?.email}</Title>
        </div>
        <div className='flex flex-col justify-center '>
          <div className='font-sans space-y-4 w-80 m-auto'>
            <p>
              <span>Rol: </span>
              {user?.role}
            </p>
            <p>
              <span>Usuario: </span>
              {user?.name}
            </p>
            <Button
              type='button'
              onClick={() => {
                handleLogout()
                navigate(routes.login.url)
              }}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
