import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../constants'
import LFRoutes from '../routes/LFRoutes'
import { RoutesType } from '../types/MascotasTypes'

export const Body: React.FC = () => {
  const isAuthenticated = () => !!localStorage.getItem('user')

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
                    item.element
                  ) : (
                    <Navigate to={routes.login.url} />
                  )
                ) : (
                  item.element
                )
              }
            />
          )
        })}

        {/* <Route path='*' element={<NotFoundRedirect />} /> */}
      </Routes>
    </div>
  )
}

export default Body
