import { User } from '../interfaces/user.interface'

export interface RoutesType {
  element: React.ReactNode
  path: string
  key: string
  public?: boolean
}

// Define an interface for the context
export interface UserContextType {
  user: User | null
  handleLogin: (loggedInUser: User) => void
  handleLogout: () => void
}

export interface LoginResponseType {
  token: string
  email: string
}

export interface ProfileResponseType {
  idUser: number
  name: string
  email: string
  role: string
  isActive: number
  softDeleteDate: string
  createdAt: string
  updateAt: string
}

export interface UserType {
  idUser: number
  name: string
  email: string
  role: string
  iat: boolean
  exp: number
}

export interface BreedType {
  idBreed: string
  nameBreed: string
  isActive: number
  softDeleteDate: string
}

export interface PostType {
  selectedTypePost: string
  title: string
  content: string
}

export interface PostResponseType {
  message: string
  idPost: number
}

export interface PetResponseType {
  message: string
  idPet: number
}

export interface ResponseType {
  status: number
  message: string
  ok: boolean
}
