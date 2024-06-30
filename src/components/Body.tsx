import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../constants'
import LFRoutes from '../routes/LFRoutes'
import { RoutesType } from '../types/MascotasTypes'
import { isTokenValid } from '../utils/utils'
import { ModalTokenExpired } from './ModalTokenExpired'

export const Body: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTokenExpired, setIsTokenExpired] = useState(false)

  const isAuthenticated = () => !!localStorage.getItem('user')

  useEffect(() => {
    if (isAuthenticated() && !isTokenValid()) {
      setIsModalOpen(true)
      setIsTokenExpired(true)
    }
  }, [])

  // // Simulate token expiration for testing
  // useEffect(() => {
  //   const simulateExpiration = setTimeout(() => {
  //     setIsModalOpen(true)
  //     setIsTokenExpired(true)
  //   }, 3000) // 3 seconds for testing purposes

  //   return () => clearTimeout(simulateExpiration)
  // }, [])

  const closeModal = () => {
    setIsModalOpen(false)
    setIsTokenExpired(false) // Reset token expiration state when modal is closed
  }

  return (
    <div className='flex-grow'>
      <Routes>
        {LFRoutes.map((item: RoutesType) => {
          // Define the protected routes
          const protectedRoutes = [
            routes.nuevamascota.url,
            routes.nuevaraza.url,
            routes.nuevopost.url,
            routes.profile.url
          ]

          // Check if the current route is protected
          const isProtectedRoute = protectedRoutes.includes(item.path)

          return (
            <Route
              key={item.key}
              path={item.path}
              element={
                isProtectedRoute ? (
                  isAuthenticated() ? (
                    isTokenExpired ? (
                      item.element // Render the element even if the token is expired
                    ) : (
                      item.element // Render the element if authenticated and token is valid
                    )
                  ) : (
                    <Navigate to={routes.home.url} />
                  )
                ) : (
                  item.element
                )
              }
            />
          )
        })}
      </Routes>
      {isModalOpen && (
        <ModalTokenExpired
          isModalOpen={isModalOpen}
          closeFunction={closeModal}
        />
      )}
    </div>
  )
}

export default Body
