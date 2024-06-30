import { jwtDecode } from 'jwt-decode'

export const isTokenValid = (): boolean => {
  const token = localStorage.getItem('token')
  if (!token) return false

  try {
    const decodedToken = jwtDecode(token)
    const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
    return decodedToken.exp !== undefined && decodedToken.exp > currentTime // Token is valid if exp is greater than current time
  } catch (error) {
    console.error('Error decoding token:', error)
    return false
  }
}
