import { jwtDecode } from 'jwt-decode'

export const isTokenValid = (): boolean => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (!token) return false

  try {
    const decodedToken = jwtDecode(token)
    const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
    console.log('token valid:')
    console.log(
      decodedToken.exp !== undefined && decodedToken.exp > currentTime
    )
    return decodedToken.exp !== undefined && decodedToken.exp > currentTime // Token is valid if exp is greater than current time
  } catch (error) {
    console.error('Error decoding token:', error)
    return false
  }
}
