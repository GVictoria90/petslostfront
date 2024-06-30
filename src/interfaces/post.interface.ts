import { Pet } from './pet.interface'

export interface Post {
  idPost: number
  selectedTypePost: string
  title: string
  content: string
  postDate: Date
  isActive: number
  softDeleteDate: Date
  userIdFk: number
  pets: Pet[]
}
