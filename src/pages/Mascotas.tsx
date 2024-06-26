import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserProvider'
import { routes } from '../constants'
import { Post } from '../interfaces/post.interface'
import { Title } from '../components/Title'
import { ModalMascota } from '../components/ModalMascota'
import { PetCard } from '../components/PetCard'

export const Mascotas: React.FC = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[] | null>(null)
  //const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useContext(UserContext)!
  // Info modals
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalImage, setModalImage] = useState<string>('second')
  const [modalTitle, setModalTitle] = useState<string>('second')
  const [modalText, setModalText] = useState<string>('second')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responsePost = await fetch(`http://localhost:3006/api/v1/posts`, {
          // const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!responsePost.ok) {
          throw new Error('Error al obtener los datos')
        }
        const dataPost = await responsePost.json()
        setPosts(dataPost)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  // useEffect(() => {
  //   console.log(user)
  //   console.log(user?.role === 'admin')
  // }, [user])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between text-center mb-6'>
        <Title as='h2'>Mascotas</Title>
        {user !== null && (
          <div className='flex justify-between gap-4'>
            <button
              className={`text-center border-tertiary-grade2 border-2 text-tertiary-grade2 hover:bg-tertiary-grade2 hover:text-secondary-grade3 font-semibold rounded-3xl p-2 transition-all duration-500 ease-in-out`}
              type='button'
              onClick={() => {
                navigate(routes.nuevamascota.url)
              }}>
              Agregar mascota
            </button>
            <button
              className={`${
                user?.role === 'admin' ? '' : ' hidden'
              } text-center border-tertiary-grade2 border-2 text-tertiary-grade2 hover:bg-tertiary-grade2 hover:text-secondary-grade3 font-semibold rounded-3xl p-2 transition-all duration-500 ease-in-out`}
              type='button'
              onClick={() => {
                navigate(routes.nuevaraza.url)
              }}>
              Agregar raza
            </button>
          </div>
        )}
      </div>
      <div className='grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-3'>
        {posts &&
          posts.map((post) => (
            <PetCard
              key={post.idPost}
              post={post}
              setModalImage={setModalImage}
              setModalTitle={setModalTitle}
              setModalText={setModalText}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
      </div>
      <ModalMascota
        isModalOpen={isModalOpen}
        closeFunction={() => {
          setIsModalOpen(false)
          setModalImage('')
          setModalTitle('')
          setModalText('')
        }}
        imagenUrl={modalImage}
        title={modalTitle}
        text={modalText}
      />
    </>
  )
}
