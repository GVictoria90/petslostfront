import React from 'react'
import { Post } from '../interfaces/post.interface'
import { Badge, BadgeVariant } from './Badge'
import { PostTypeEnum } from '../constants'

interface PetCardProps {
  post: Post
  setModalImage: (value: React.SetStateAction<string>) => void
  setModalTitle: (value: React.SetStateAction<string>) => void
  setModalText: (value: React.SetStateAction<string>) => void
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void
}

export const PetCard: React.FC<PetCardProps> = ({
  post,
  setModalImage,
  setModalTitle,
  setModalText,
  setIsModalOpen
}) => {
  const postTypeColors: { [key in PostTypeEnum]: string } = {
    [PostTypeEnum.BUSCO_MASCOTA]: 'red',
    [PostTypeEnum.OFREZCO_ADOPCION]: 'yellow',
    [PostTypeEnum.QUIERO_ADOPTAR]: 'indigo',
    [PostTypeEnum.ENCONTRE_MASCOTA]: 'green'
  }

  const color = postTypeColors[
    post.selectedTypePost as PostTypeEnum
  ] as BadgeVariant
  console.log(post.selectedTypePost)
  return (
    <div
      className='border-secondary-grade5 border-2 p-3 rounded-lg flex flex-col justify-between h-full'
      key={post.idPost}
      id={`post-${post.idPost}`}>
      {post.pets[0] && post.pets[0].image !== undefined && (
        <img
          src={`/img/${post.pets[0].image}`}
          width={150}
          height={150}
          alt='Imagen de la mascota'
          className='mb-4'
        />
      )}
      <div className='flex flex-col justify-between flex-grow'>
        <div className='mt-auto'>
          <div>
            <h5 className='card-title font-bold mb-1'>{post.title}</h5>
            <div className='flex justify-end'>
              <Badge variant={color} size={'xs'} className='my-2'>
                {`${post.selectedTypePost}`}
              </Badge>
            </div>
            <p className='card-text mb-4'>{post.content}</p>
          </div>
          <div className='flex justify-center'>
            <button
              className='text-center border-tertiary-grade2 border-2 text-tertiary-grade2 hover:bg-tertiary-grade2 hover:text-secondary-grade3 font-semibold rounded-3xl p-2 transition-all duration-500 ease-in-out'
              type='button'
              onClick={() => {
                setModalImage('')
                setModalTitle(post.title)
                setModalText(post.content)
                setIsModalOpen(true)
              }}>
              Ver publicación
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
